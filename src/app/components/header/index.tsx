"use client";

import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useTheme } from "next-themes";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="dark:text-white pb-4 pt-32">
      <div className='flex'>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo y Nombre */}
          <div className="flex items-center space-x-4 justify-center">
            {/* Logo */}
            <span className="text-lg">
              <svg
                className="w-12 h-12 md:w-16 md:h-16"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <style>
                  {`.text {
                    font-family: 'Arial', sans-serif;
                    font-weight: bold;
                    font-size: 50px;
                    fill: #a7a7a7;
                    letter-spacing: -5px;
                    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.1));
                  }`}
                </style>
                <text 
                  x="50%" 
                  y="50%" 
                  className="text" 
                  dominantBaseline="middle" 
                  textAnchor="middle"
                >
                  CS
                </text>
              </svg>
            </span>
          </div>

          {/* Navegación */}
          <div className='md:px-4 '>
            <span className='text-titleDark dark:text-title text-xs md:text-2xl font-bold font-menlo '>
              Claudia Saldivar
            </span>
            <nav className={`md:flex space-x-4 mb-2 font-menlo font-light text-sm text-content pt-2 ${
              menuOpen ? 'block' : 'hidden'
            } md:block`}>
              <a href="#" className="border-r border-[#9ca991] border-dashed pr-4 hover:text-gray-400">
                Home
              </a>
              <a href="#" className="border-r border-[#9ca991] border-dashed pr-4 hover:text-gray-400">
                Blog
              </a>
              <a href="#" className="border-r border-[#9ca991] border-dashed pr-4 hover:text-gray-400">
                Notes
              </a>
              <a href="#" className="border-r border-[#9ca991] border-dashed pr-4 hover:text-gray-400">
                Speaking
              </a>
              <a href="#" className="border-r border-[#9ca991] border-dashed pr-4 hover:text-gray-400">
                Youtube
              </a>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </nav>
          </div>

          {/* Iconos */}
          <div className="flex items-center space-x-4 ml-16">
            {/* Botón de búsqueda */}
            <button 
              aria-label="Search" 
              className="hover:text-gray-400 text-title"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>

            {/* Botón de alternar modo oscuro */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hover:text-gray-400 text-title"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <MoonIcon className="h-7 w-7" />
              ) : (
                <SunIcon className="h-7 w-7" />
              )}
            </button>

            {/* Botón de menú móvil */}
            <button
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden hover:text-gray-400 text-title"
            >
              <Bars3Icon className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;