"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold  text-primary-dark bg-clip-text  hover:scale-105 transition-transform"
          >
            Eraslan Ajans
          </Link>

          {/* Hamburger Menü Butonu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menü */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Ana Sayfa', href: '/' },
              { name: 'Influencerlar', href: '/influencer' },
              { name: 'Hizmetler', href: '/services' },
              { name: 'İletişim', href: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
              Bize Ulaşın
            </button>
          </div>
        </div>

        {/* Mobil Menü */}
        <div
          className={`${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col space-y-4 py-4">
            {[
              { name: 'Ana Sayfa', href: '/' },
              { name: 'Influencerlar', href: '/influencer' },
              { name: 'Hizmetler', href: '/services' },
              { name: 'İletişim', href: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-primary text-white mx-4 py-2 rounded-full hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
              Bize Ulaşın
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  