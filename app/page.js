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
    <div className="p-4 min-h-screen bg-white ">
      {/* Welcome Section */}
      <div className="bg-gray-200 rounded-lg p-4 mb-25 mt-20">
        <h2 className="text-6xl font-semibold text-gray-800 mb-9 text-center">
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
          <div className="bg-white border border-purple-600 rounded-lg p-3">
            <h4 className="font-medium text-gray-800 mb-2">Copa Sul</h4>
            <div className="flex items-center text-sm text-gray-600 mb-1">
              <Calendar className="w-4 h-4 mr-1" />
              <span>17 JUL, 2025</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              <span>18:00</span>
            </div>
          </div>

          {/* Copa Norte */}
          <div className="bg-white border border-purple-600 rounded-lg p-3">
            <h4 className="font-medium text-gray-800 mb-2">Copa São Paulo</h4>
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
      <div className="bg-purple-600 text-white rounded-lg p-4 mb-25 mt-25">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-semibold mb-1">Futebol Semanal - Gratuito</h3>
            <div className="flex items-center text-sm mb-1">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Rio de Janeiro, Terça-feira 17</span>
            </div>
            <p className="text-sm">Inscrições fecham às 14:15</p>
          </div>
          <div className="ml-4">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Próximos Jogos
      </h3>
      {/* Jogo 1 */}
      <div className="bg-white border border-purple-600 rounded-lg p-3 mb-6 flex">
        <div className="flex flex-col justify-center items-start mr-6">
          <div className="flex items-center gap-2 text-gray-800 font-semibold text-xl pt-3">
            <img src="/img/SPFC.png" alt="Time A Logo" className="w-6 h-6" />
            <span>São Paulo</span>
          </div>

          <span className="text-gray-800 font-bold text-xl my-2 ml-15">X</span>

          <div className="flex items-center gap-2 text-gray-800 font-semibold text-xl pb-3">
            <img src="/img/CORINTHIANS.png" alt="Time B Logo" className="w-6 h-6" />
            <span>Corinthians</span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center flex-1 mr-43">
          <h4 className="font-medium text-gray-800 mb-2">Copa São Paulo</h4>
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

      {/* Jogo 2 */}
      <div className="bg-white border border-purple-600 rounded-lg p-3 mb-6 flex">
        <div className="flex flex-col justify-center items-start mr-6">
          <div className="flex items-center gap-2 text-gray-800 font-semibold text-xl pt-3">
            <img src="/img/PALMEIRAS.png" alt="Time A Logo" className="w-6 h-6" />
            <span>Palmeiras</span>
          </div>

          <span className="text-gray-800 font-bold text-xl my-2 ml-15">X</span>

          <div className="flex items-center gap-2 text-gray-800 font-semibold text-xl pb-3">
            <img src="/img/JUVENTUS-SP.png" alt="Time B Logo" className="w-6 h-6" />
            <span>Juventus-SP</span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center flex-1 mr-47">
          <h4 className="font-medium text-gray-800 mb-2">Copa São Paulo</h4>
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

      {/* Jogo 3 */}
      <div className="bg-white border border-purple-600 rounded-lg p-3 mb-6 flex">
        <div className="flex flex-col justify-center items-start mr-6">
          <div className="flex items-center gap-2 text-gray-800 font-semibold text-xl pt-3">
            <img src="/img/GREMIO.png" alt="Time A Logo" className="w-6 h-6" />
            <span>Grêmio</span>
          </div>

          <span className="text-gray-800 font-bold text-xl my-2 ml-15">X</span>

          <div className="flex items-center gap-2 text-gray-800 font-semibold text-xl pb-3">
            <img src="/img/INTERNACIONAL.png" alt="Time B Logo" className="w-6 h-6" />
            <span>Internacional</span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center flex-1 mr-47">
          <h4 className="font-medium text-gray-800 mb-2">Copa Sul</h4>
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <Calendar className="w-4 h-4 mr-1" />
            <span>17 JUL, 2025</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span>18:00</span>
          </div>
        </div>
      </div>

      {/* Jogo 4 */}
      <div className="bg-white border border-purple-600 rounded-lg p-3 mb-6 flex">
        <div className="flex flex-col justify-center items-start mr-6">
          <div className="flex items-center gap-2 text-gray-800 font-semibold text-xl pt-3">
            <img src="/img/JUVENTUDE.png" alt="Time A Logo" className="w-6 h-6" />
            <span>Juventude</span>
          </div>

          <span className="text-gray-800 font-bold text-xl my-2 ml-15">X</span>

          <div className="flex items-center gap-2 text-gray-800 font-semibold text-xl pb-3">
            <img src="/img/BRASIL.png" alt="Time B Logo" className="w-6 h-6" />
            <span>Brasil</span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center flex-1 mr-47">
          <h4 className="font-medium text-gray-800 mb-2">Copa Sul</h4>
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <Calendar className="w-4 h-4 mr-1" />
            <span>17 JUL, 2025</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span>18:00</span>
          </div>
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

