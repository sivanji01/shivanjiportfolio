import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-gray-700 shadow-lg"
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Alluri sivanji
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          Bio-Medical Student 
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Passionate about technology and its applications in healthcare.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/sivanji01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sivanji-alluri-606080225/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
              <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alluri.sivanji9@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              >
              <Mail size={24} />
              </a>
        </div>
      </div>
    </div>
  );
};

export default Home;