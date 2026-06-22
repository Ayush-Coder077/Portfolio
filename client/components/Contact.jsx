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
        'Please complete verification.'
      );
      return;
    }

    setResult('Sending...');

    const formData = new FormData(
      event.target
    );

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
        setResult(
          data.message ||
            'Submission failed'
        );
      }
    } catch (error) {
      console.error(error);
      setResult(
        '❌ Failed to send message'
      );
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-[12%] py-10"
    >
      <h2 className="text-center text-5xl mb-8">
        Get In Touch
      </h2>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        {/* Honeypot */}
        <input
          type="text"
          name="botcheck"
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border p-3 rounded mb-4"
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="w-full border p-3 rounded mb-4"
        />

        <div className="mb-4">
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
          className="bg-black text-white px-8 py-3 rounded-full"
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