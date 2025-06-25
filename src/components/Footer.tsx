
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Alok Kumar
            </div>
            <p className="text-gray-400 text-sm">
              Full-Stack Web & Software Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/imalokkumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 border border-purple-500/20 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/alokkumarsgl"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 border border-purple-500/20 rounded-xl text-gray-400 hover:text-purple-400 hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:alokkumarsgl@gmail.com"
              className="p-3 bg-gray-800 border border-purple-500/20 rounded-xl text-gray-400 hover:text-red-400 hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <nav className="flex flex-wrap justify-center md:justify-end gap-6 mb-2">
              <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                About
              </a>
              <a href="#experience" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                Experience
              </a>
              <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Alok Kumar. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart size={16} className="text-red-400" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
