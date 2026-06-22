'use client';

import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

export default function Contact() {
  const [result, setResult] = useState('');
  const [token, setToken] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!token) {
      setResult(
        'Please complete verification first.'
      );
      return;
    }

    setResult('Sending...');

    const formData = new FormData(event.target);

    formData.append(
      'cf-turnstile-response',
      token
    );

    try {
      const response = await fetch(
        '/api/contact',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult(
          '✅ Message sent successfully!'
        );

        event.target.reset();
        setToken('');
      } else {
        setResult(data.message);
      }
    } catch (error) {
      console.error(error);
      setResult('❌ Something went wrong');
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">
        Connect with me
      </h4>

      <h2 className="text-center text-5xl font-Ovo">
        Get In Touch
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! Feel free to
        send me a message.
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <input
          type="hidden"
          name="subject"
          value="Ayush Portfolio Contact Form"
        />

        {/* Honeypot */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: 'none' }}
          tabIndex="-1"
          autoComplete="off"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 dark:border-white/30 rounded-lg px-4 py-3 bg-white dark:bg-darkHover/30 text-black dark:text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 dark:border-white/30 rounded-lg px-4 py-3 bg-white dark:bg-darkHover/30 text-black dark:text-white"
          />
        </div>

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="w-full border border-gray-300 dark:border-white/30 rounded-lg px-4 py-3 bg-white dark:bg-darkHover/30 text-black dark:text-white mb-6"
        />

        <div className="mb-6 flex justify-center">
          <Turnstile
            siteKey={
              process.env
                .NEXT_PUBLIC_TURNSTILE_SITE_KEY
            }
            onSuccess={(token) =>
              setToken(token)
            }
          />
        </div>

        <button
          type="submit"
          className="py-3 px-8 bg-black text-white rounded-full mx-auto flex items-center gap-2 hover:bg-gray-800 transition"
        >
          Send Message
        </button>

        {result && (
          <p className="mt-4 text-center">
            {result}
          </p>
        )}
      </form>
    </section>
  );
}