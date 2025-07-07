'use client';

import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of these channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">123-456-7890</p>
                    <p className="text-gray-600">Emergency: 123-456-7899</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <EnvelopeIcon className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@pawcareclinic.com</p>
                    <p className="text-gray-600">emergency@pawcareclinic.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">123 Pet Care Lane</p>
                    <p className="text-gray-600">Veterinary District, CA 90210</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Hours of Operation</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="(123) 456-7890"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors ${
                  status === 'loading' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-center mt-4">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-600 text-center mt-4">
                  Failed to send message. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 