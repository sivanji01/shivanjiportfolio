import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
        <p className="text-gray-300 mb-8">
          Feel free to reach out through any of the following channels:
        </p>
        <div className="space-y-6">
          <a href="mailto: alluri.sivanji@gmail.com" className="flex items-center text-gray-300 hover:text-purple-400">
            <Mail className="mr-4" size={24} />
            <span>alluri.sivanji@gmail.com</span>
          </a>
          <a href="tel: +91 7330635414" className="flex items-center text-gray-300 hover:text-purple-400">
            <Phone className="mr-4" size={24} />
            <span>+91 7330635414</span>
          </a>
          <a href="https://github.com/sivanji01" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-purple-400">
            <Github className="mr-4" size={24} />
            <span>github.com</span>
          </a>
          <a href="https://www.linkedin.com/in/sivanji-alluri-606080225/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-purple-400">
            <Linkedin className="mr-4" size={24} />
            <span>linkedin.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
