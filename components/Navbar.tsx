import React, { useState } from 'react';
import { AppRoute } from '../types';

interface NavbarProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: AppRoute.HOME, label: 'Beranda' },
    { id: AppRoute.NGLEGENA, label: 'Nglegena' },
    { id: AppRoute.PASANGAN, label: 'Pasangan' },
    { id: AppRoute.SANDHANGAN, label: 'Sandhangan' },
    { id: AppRoute.AI_EXAMPLES, label: 'Kata AI' },
    { id: AppRoute.QUIZ, label: 'Kuis' },
    { id: AppRoute.ABOUT, label: 'Tentang' },
  ];

  return (
    <nav className="bg-jawa-brown text-jawa-cream shadow-lg sticky top-0 z-50 border-b-4 border-jawa-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate(AppRoute.HOME)}>
            <span className="text-2xl mr-2">ꦲ</span>
            <span className="font-bold text-xl tracking-wide font-javanese">Sinau Aksara</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentRoute === item.id
                      ? 'bg-jawa-gold text-jawa-brown'
                      : 'hover:bg-amber-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-amber-800 inline-flex items-center justify-center p-2 rounded-md text-jawa-cream hover:text-white hover:bg-amber-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-amber-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentRoute === item.id
                    ? 'bg-jawa-gold text-jawa-brown'
                    : 'text-jawa-cream hover:bg-amber-700 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;