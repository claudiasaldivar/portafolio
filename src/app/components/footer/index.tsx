"use client";

import { FC } from 'react';
import { 
  TwitterIcon, 
  GithubIcon, 
  LinkedinIcon 
} from 'lucide-react';

const Footer: FC = () => {
  return (
    <footer className="w-full py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href="https://twitter.com/yourhandle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <TwitterIcon size={20} />
            </a>
            <a 
              href="https://github.com/yourhandle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/yourhandle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-gray-400 font-menlo">
            Copyright © {new Date().getFullYear()} Claudia Saldivar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;