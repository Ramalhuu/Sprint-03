"use client";
import { Plus } from "lucide-react";
import { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import CadastroJogadora from './components/CadastroJogadora';
import Navigation from './components/navigation_component';

function Home() {
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);

  const handleOpenCadastro = () => {
    setIsCadastroOpen(true);
  };

  const handleCloseCadastro = () => {
    setIsCadastroOpen(false);
  };

  return (
    <div className="p-4 min-h-screen bg-white">
      {/* Welcome Section */}
      <div className="bg-gray-200 rounded-lg p-4 mb-6 mt-8">
        <h2 className="text-6xl font-semibold text-gray-800 mb-2 text-center">
          Bem-vinda ao <strong className="text-purple-600">Donas da Bola!</strong>
        </h2>
        <p className="text-2xl text-gray-600 leading-relaxed mb-2 text-center pl-15 pr-15">
          Aqui o futebol é delas! Conecte-se com outras jogadoras, participe de eventos, inscreva-se em torneios, organize peladas semanais e viva o esporte com segurança e liberdade.
        </p>
        <p className="text-2xl text-gray-600 leading-relaxed mb-2 text-center">
          Este é o seu espaço para brilhar, jogar e crescer dentro e fora das quadras. ⚽💜
        </p>
      </div>

      {/* Copinha de Futebol Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Copinha de Futebol</h3>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Copa Sul */}
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

          {/* Copa Norte */}
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


      </div>

      {/* Futebol Semanal Section */}
      <div className="bg-purple-600 text-white rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-semibold mb-1">Futebol Semanal - Gratuito</h3>
            <div className="flex items-center text-sm mb-1">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Rio de Janeiro, Terça-feira 17</span>
            </div>
            <p className="text-sm">Inscrições fecham às 14:22</p>
          </div>
          <div className="ml-4">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-3 mb-6">
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
          <div className="bg-white border border-gray-200 rounded-lg p-3 mb-6">
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

      {/* Modal de Cadastro */}
      <CadastroJogadora 
        isOpen={isCadastroOpen} 
        onClose={handleCloseCadastro} 
      />
    </div>
  );
}

export default Home;

