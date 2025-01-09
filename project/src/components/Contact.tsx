import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new projects, opportunities, or just having a chat.
              Feel free to reach out through any of the following channels:
            </p>
            <div className="space-y-6">
              <a
                href="mailto:john.doe@example.com"
                className="flex items-center text-gray-300 hover:text-purple-400"
              >
                <Mail className="mr-4" size={24} />
                <span>john.doe@example.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center text-gray-300 hover:text-purple-400"
              >
                <Phone className="mr-4" size={24} />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-purple-400"
              >
                <Github className="mr-4" size={24} />
                <span>github.com/johndoe</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-purple-400"
              >
                <Linkedin className="mr-4" size={24} />
                <span>linkedin.com/in/johndoe</span>
              </a>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;