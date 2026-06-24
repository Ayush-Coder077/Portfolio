'use client';

import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus('Please complete reCAPTCHA');
      return;
    }

    setLoading(true);
    setStatus('Sending...');

    const formData = new FormData();

    formData.append(
      'name',
      e.target.name.value
    );

    formData.append(
      'email',
      e.target.email.value
    );

    formData.append(
      'message',
      e.target.message.value
    );

    formData.append(
      'g-recaptcha-response',
      captchaToken
    );

    try {
      const response = await fetch(
        'https://formspree.io/f/xrewgapa',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const data = await response.json();

      console.log(
        'Formspree Response:',
        data
      );

      if (response.ok) {
        setStatus(
          '✅ Message sent successfully!'
        );

        e.target.reset();
        setCaptchaToken(null);
      } else {
        setStatus(
          data?.error ||
            JSON.stringify(data)
        );
      }
    } catch (error) {
      console.error(error);

      setStatus(
        '❌ Network or server error'
      );
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="w-full px-[12%] py-10"
    >
      <h2 className="text-center text-5xl mb-10">
        Get In Touch
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto"
      >
        <input
          type="text"
          name="_gotcha"
          style={{ display: 'none' }}
        />

        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full bg-white dark:bg-[#150327] border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 p-4 rounded-xl mb-4 focus:outline-none focus:border-purple-500"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full bg-white dark:bg-[#150327] border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 p-4 rounded-xl mb-4 focus:outline-none focus:border-purple-500"
        />

        <textarea
          name="message"
          rows="6"
          required
          placeholder="Your Message"
          className="w-full bg-white dark:bg-[#150327] border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 p-4 rounded-xl mb-4 focus:outline-none focus:border-purple-500"
        />

        <div className="mb-4">
          <ReCAPTCHA
            sitekey={
              process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
            }
            onChange={(token) =>
              setCaptchaToken(token)
            }
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-8 py-3 rounded-full"
        >
          {loading
            ? 'Sending...'
            : 'Send Message'}
        </button>

        {status && (
          <p className="mt-4 text-center">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}