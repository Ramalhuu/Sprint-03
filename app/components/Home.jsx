import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import CadastroJogadora from './CadastroJogadora';

function Home() {
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);

  const handleOpenCadastro = () => {
    setIsCadastroOpen(true);
  };

  const handleCloseCadastro = () => {
    setIsCadastroOpen(false);
  };

  return (
    <div className="p-4">
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Bem-vinda ao Donas da Bola!
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-2">
          Aqui o futebol é delas! Conecte-se com outras jogadoras, participe de eventos, inscreva-se em torneios, organize peladas semanais e viva o esporte com segurança e liberdade.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-2">
          Este é o seu espaço para brilhar, jogar e crescer dentro e fora das quadras. ⚽💜
        </p>
        <p className="text-sm text-gray-600">
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

        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex items-start">
            <div className="bg-green-100 rounded-full p-2 mr-3">
              <User className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 mb-1">Cadastro de Jogadora</h4>
              <p className="text-sm text-gray-600 mb-3">
                Se cadastre para ter mais chance de ser chamada por empresas!
              </p>
              <button 
                onClick={handleOpenCadastro}
                className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-pink-600 transition-colors"
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
            <p className="text-sm">Inscrições fecham às 14:22</p>
          </div>
          <div className="ml-4">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
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
