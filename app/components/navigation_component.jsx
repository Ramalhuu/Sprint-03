"use client";

import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import Link from 'next/link';
import CadastroJogadora from './CadastroJogadora';

const Navigation = () => {
  const { user } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleOpenCadastro = () => {
    setIsCadastroOpen(true);
  };

  const handleCloseCadastro = () => {
    setIsCadastroOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-purple-800 shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" passHref>
                <h1 className="text-xl font-bold text-white cursor-pointer">
                  Donas da Bola
                </h1>
              </Link>
            </div>

            {/* Menu desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/login"
                  className="text-white hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Login da Jogadora
                </Link>
                <Link
                  href="/listajogadoras"
                  className="text-white hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Procurar Jogadoras
                </Link>
                {user && (
                  <button
                    onClick={handleOpenCadastro}
                    className="text-white hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Cadastrar-se
                  </button>
                )}
              </div>
            </div>

            {/* Botão menu mobile */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Abrir menu principal</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isMobileOpen
                        ? 'M6 18L18 6M6 6l12 12'
                        : 'M4 6h16M4 12h16M4 18h16'
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        {isMobileOpen && (
          <div className="md:hidden bg-purple-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/login"
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Login da Jogadora
              </Link>
              <Link
                href="/listajogadoras"
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Procurar Jogadoras
              </Link>
              {user && (
                <button
                  onClick={handleOpenCadastro}
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Cadastrar Jogadora
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Modal fora da nav */}
      <CadastroJogadora
        isOpen={isCadastroOpen}
        onClose={handleCloseCadastro}
      />
    </>
  );
};

export default Navigation;
