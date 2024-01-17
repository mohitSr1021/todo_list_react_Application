import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (

    <div className="w-full p-3 text-center bg-gray-800 text-white">
      <div className="flex items-center justify-center flex-col mt-10">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Mohit Singh Rawat. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 mt-3 mb-16">
          <span>Connect with Me:</span>
          <a
            href="https://github.com/mohitSr1021"
            target="blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/_m._s._rawat_/"
            target="blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:underline"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/mohit-singh-rawat-12680b21b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:underline"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
    
  );
}

export default Footer;
