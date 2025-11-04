"use client";

import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import Link from 'next/link';
import CadastroJogadora from './CadastroJogadora';

const Navigation = () => {
  const { user, logout } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleOpenCadastro = () => {
    setIsCadastroOpen(true);
  };

  const handleCloseCadastro = () => {
    setIsCadastroOpen(false);
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <>
      <nav className="bg-purple-800 shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" passHref>
                <h1 className="text-xl font-bold text-white cursor-pointer -ml-55">
                  Donas da Bola<img src='/img/727699bf8d10e0918a710677e1f41a0e-menina-jogando-futebol.webp' alt='Logo' className='inline-block w-8 h-8 ml-2'/>
                </h1>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {!user ? (
                  <>
                    <Link
                      href="/login"
                      className="text-white hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      Login
                    </Link>
                    <Link
                      href="/listajogadoras"
                      className="text-white hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      Procurar Jogadoras
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/listajogadoras"
                      className="text-white hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      Procurar Jogadoras
                    </Link>
                    <div className="relative">
                      <button
                        onClick={toggleProfileMenu}
                        className="text-white hover:bg-purple-700 p-2 rounded-full transition-colors duration-200 flex items-center"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </button>
                      
                      {isProfileOpen && (
                        <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-xl py-1 z-50 border-2 border-purple-700">
                          <div className="px-4 py-3 text-sm text-gray-800 border-b border-purple-100">
                            <p className="font-semibold text-purple-800">{user.name}</p>
                            <p className="text-gray-600">{user.email}</p>
                          </div>
                          <button
                            onClick={handleOpenCadastro}
                            className="block w-full text-left px-4 py-2 text-sm text-purple-700 hover:bg-purple-50 hover:text-purple-900 transition-colors duration-200"
                          >
                            Cadastrar-se como jogadora
                          </button>
                          <button
                            onClick={logout}
                            className="block w-full text-left px-4 py-2 text-sm text-purple-700 hover:bg-purple-50 hover:text-purple-900 transition-colors duration-200"
                          >
                            Sair
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

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

        {isMobileOpen && (
          <div className="md:hidden bg-purple-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {!user ? (
                <>
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
                </>
              ) : (
                <>
                  <div className="px-3 py-2 text-gray-700 border-b border-gray-200">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                  </div>
                  <button
                    onClick={handleOpenCadastro}
                    className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                  >
                    Cadastrar Jogadora
                  </button>
                  <Link
                    href="/listajogadoras"
                    className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Procurar Jogadoras
                  </Link>
                  <button
                    onClick={logout}
                    className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                  >
                    Sair
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      <CadastroJogadora
        isOpen={isCadastroOpen}
        onClose={handleCloseCadastro}
      />
    </>
  );
};

export default Navigation;