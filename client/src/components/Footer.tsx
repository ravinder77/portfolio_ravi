import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo/Name */}
          <div className="mb-4 sm:mb-0 text-center sm:text-left">

            <h1 className=" bg-gradient-to-tr from-primaryYellow to-primaryWhite text-transparent bg-clip-text  text-2xl font-bold">ravinder</h1>


            <p className="text-gray-400">Full Stack Developer | Open to Opportunities</p>
          </div>

        
          {/* Social Media Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/ravinder77"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition duration-200"
            >
              <FaGithub size={24} />
              
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition duration-200"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition duration-200"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ravinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
