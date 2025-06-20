import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router';
import ProFastLogo from '../sitelogo/ProFastLogo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Project Name */}
        <div>
           <ProFastLogo></ProFastLogo>
          <p className="text-sm mt-2 text-gray-300">Your gateway to global language learning.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-purple-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-400 transition">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Globallern. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
