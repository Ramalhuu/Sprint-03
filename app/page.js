"use client";

import React, { useState } from 'react';
import { Calendar, Clock, User, Home as HomeIcon, Plus, Users } from 'lucide-react';
import CadastroJogadora from './CadastroJogadora';
import ListaJogadoras from './ListaJogadoras';
import { Search as HeroiconsOutlineSearch } from '@heroicons/vue/24/outline';
import { User as HeroiconsSolidUser } from '@heroicons/vue/24/solid';

function Home() {
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleOpenCadastro = () => {
    setIsCadastroOpen(true);
  };

  const handleCloseCadastro = () => {
    setIsCadastroOpen(false);
  };

  const handleGoToLista = () => {
    setCurrentPage('lista');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'lista') {
    return <ListaJogadoras onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-purple-600 text-white py-2 px-4 flex items-center justify-between relative">
        <h1 className="text-lg font-semibold ml-4">Donas da Bola</h1>
        <div className="flex items-center space-x-6 mr-2">
          <button className="flex flex-col items-center justify-center p-1">
            <div className="bg-green-500 rounded-full p-2 flex items-center justify-center">
              <HomeIcon className="w-7 h-7 text-white" />
            </div>
          </button>
          <button className="flex flex-col items-center justify-center p-1">
            <Calendar className="w-8 h-8 text-gray-200" />
          </button>
          <button className="flex flex-col items-center justify-center p-1">
            <Plus className="w-8 h-8 text-gray-200" />
          </button>
          <button 
            onClick={handleGoToLista}
            className="flex flex-col items-center justify-center p-1"
          >
            <div className="bg-green-500 rounded-full p-2 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="bg-gray-50 rounded-lg p-4 mb-30 mt-15">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">
            Bem-vinda ao Donas da Bola!
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed mb-2 font-medium text-center pl-15 pr-15">
            Aqui o futebol é delas! Conecte-se com outras jogadoras, participe de eventos, inscreva-se em torneios, organize peladas semanais e viva o esporte com segurança e liberdade.
          </p>
          <p className="text-x1 text-gray-600 leading-relaxed mb-2 font-medium text-center">
            Este é o seu espaço para brilhar, jogar e crescer dentro e fora das quadras. ⚽💜
          </p>
          <p className="text-x1 text-gray-600 font-medium leading-relaxed text-center">
            Vamos juntas transformar o jogo?
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Copinha de Futebol</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <h4 className="font-medium text-gray-800 mb-2">Copa Sul</h4>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <Calendar className="w-4 h-4 mr-1" />
                <span>15 JUL, 2025</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span>10:00</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <h4 className="font-medium text-gray-800 mb-2">Copa Norte</h4>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <Calendar className="w-4 h-4 mr-1" />
                <span>17 JUL, 2025</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span>14:00</span>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 mt-15">
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <User className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-x1 text-gray-800 font-semibold mb-1">Cadastro de Jogadora</h4>
                <p className="text-sm text-gray-700 mb-3 font-medium">
                  Não perca a chance de brilhar! Cadastre-se agora e seja chamada por empresas.
                </p>
                <button 
                  onClick={handleOpenCadastro}
                  className="w-full bg-gradient-to-r to-pink-600 from-pink-500 text-white py-2 px-3 rounded-lg font-medium shadow-md transition-all duration-200 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-pink-700"
                >
                  Cadastrar-se
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-purple-600 text-white rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Futebol Semanal - Gratuito</h3>
              <div className="flex items-center text-sm mb-1">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Rio de Janeiro, Terça-feira 17</span>
              </div>
              <p className="text-sm">Inscrições encerram em 15 de Julho, às 14:22 </p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
            </div>
            <div className="ml-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Jogos Hoje</h3>
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 flex items-center justify-between">
        <div className="flex flex-col items-start flex-1">
          <div className="flex items-center mb-4">
            <img src="/logos/gremio.png" alt="Grêmio" className="w-10 h-10 mr-3" />
            <span className="text-2xl font-bold text-gray-800">Grêmio</span>
          </div>
          <div className="flex items-center">
            <img src="/logos/internacional.png" alt="Internacional" className="w-10 h-10 mr-3" />
            <span className="text-2xl font-bold text-gray-800">Internacional</span>
          </div>
        </div>
        <div className="flex flex-col items-center flex-1">
          <div className="flex items-center text-xl text-gray-600 mb-2">
            <Calendar className="w-6 h-6 mr-2" />
            <span>15 JUL, 2025</span>
          </div>
          <div className="flex items-center text-xl text-gray-600">
            <Clock className="w-6 h-6 mr-2" />
            <span>10:00</span>
          </div>
        </div>
        <div className="flex flex-col items-end flex-1">
          <span className="text-3xl font-extrabold">
            <span className="text-gray-600">0</span>
            <span className="mx-2 text-purple-700">x</span>
            <span className="text-gray-600">0</span>
          </span>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 flex items-center justify-between">
        <div className="flex flex-col items-start flex-1">
          <div className="flex items-center mb-4">
            <img src="/logos/juventude.png" alt="Juventude" className="w-10 h-10 mr-3" />
            <span className="text-2xl font-bold text-gray-800">Juventude</span>
          </div>
          <div className="flex items-center">
            <img src="/logos/BRASIL.png" alt="Brasil de Farroupilha" className="w-10 h-10 mr-3" />
            <span className="text-2xl font-bold text-gray-800">Brasil de Farroupilha</span>
          </div>
        </div>
        <div className="flex flex-col items-center flex-1">
          <div className="flex items-center text-xl text-gray-600 mb-2">
            <Calendar className="w-6 h-6 mr-2" />
            <span>15 JUL, 2025</span>
          </div>
          <div className="flex items-center text-xl text-gray-600">
            <Clock className="w-6 h-6 mr-2" />
            <span>10:00</span>
          </div>
        </div>
        <div className="flex flex-col items-end flex-1">
          <span className="text-3xl font-extrabold">
            <span className="text-gray-600">0</span>
            <span className="mx-2 text-purple-700">x</span>
            <span className="text-gray-600">0</span>
          </span>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 flex items-center justify-between">
        <div className="flex flex-col items-start flex-1">
          <div className="flex items-center mb-4">
            <img src="/logos/SPFC.png" alt="São Paulo" className="w-10 h-10 mr-3" />
            <span className="text-2xl font-bold text-gray-800">São Paulo</span>
          </div>
          <div className="flex items-center">
            <img src="/logos/Corinthians.png" alt="Corinthians" className="w-10 h-10 mr-3" />
            <span className="text-2xl font-bold text-gray-800">Corinthians</span>
          </div>
        </div>
        <div className="flex flex-col items-center flex-1">
          <div className="flex items-center text-xl text-gray-600 mb-2">
            <Calendar className="w-6 h-6 mr-2" />
            <span>15 JUL, 2025</span>
          </div>
          <div className="flex items-center text-xl text-gray-600">
            <Clock className="w-6 h-6 mr-2" />
            <span>10:00</span>
          </div>
        </div>
        <div className="flex flex-col items-end flex-1">
          <span className="text-3xl font-extrabold">
            <span className="text-gray-600">0</span>
            <span className="mx-2 text-purple-700">x</span>
            <span className="text-gray-600">0</span>
          </span>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 flex items-center justify-between">
        <div className="flex flex-col items-start flex-1">
          <div className="flex items-center mb-4">
            <img src="/logos/Palmeiras.png" alt="Palmeiras" className="w-10 h-10 mr-3" />
            <span className="text-2xl font-bold text-gray-800">Palmeiras</span>
          </div>
          <div className="flex items-center">
            <img src="/logos/JUVENTUS-SP.png" alt="Juventus-SP" className="w-10 h-10 mr-3" />
            <span className="text-2xl font-bold text-gray-800">Juventus-SP</span>
          </div>
        </div>
        <div className="flex flex-col items-center flex-1">
          <div className="flex items-center text-xl text-gray-600 mb-2">
            <Calendar className="w-6 h-6 mr-2" />
            <span>15 JUL, 2025</span>
          </div>
          <div className="flex items-center text-xl text-gray-600">
            <Clock className="w-6 h-6 mr-2" />
            <span>10:00</span>
          </div>
        </div>
        <div className="flex flex-col items-end flex-1">
          <span className="text-3xl font-extrabold">
            <span className="text-gray-600">0</span>
            <span className="mx-2 text-purple-700">x</span>
            <span className="text-gray-600">0</span>
          </span>
        </div>
      </div>
      <CadastroJogadora 
        isOpen={isCadastroOpen} 
        onClose={handleCloseCadastro} 
      />
    </div>
  );
}

export default Home;
