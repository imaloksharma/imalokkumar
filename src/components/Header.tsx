
import { Github, Linkedin, Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Alok Kumar
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/imalokkumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/alokkumarsgl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:alokkumarsgl@gmail.com"
              className="text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-300 hover:text-purple-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/in/imalokkumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/alokkumarsgl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:alokkumarsgl@gmail.com"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
