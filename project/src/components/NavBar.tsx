import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ 
  activeSection, 
  setActiveSection, 
  isMenuOpen, 
  setIsMenuOpen 
}) => {
  const navItems = ['home', 'about', 'projects', 'education', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-gray-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-purple-400">Portfolio</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`${
                  activeSection === item
                    ? 'text-purple-400 border-b-2 border-purple-400'
                    : 'text-gray-300 hover:text-purple-400'
                } capitalize px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1gl9n1mbohrhOQe4yH6Unej2mxQSkggFq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 capitalize px-3 py-2 text-sm font-medium"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-purple-400 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  setIsMenuOpen(false);
                }}
                className={`${
                  activeSection === item
                    ? 'text-purple-400 bg-gray-700'
                    : 'text-gray-300 hover:text-purple-400 hover:bg-gray-700'
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left capitalize`}
              >
                {item}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-gray-700 w-full text-left"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
