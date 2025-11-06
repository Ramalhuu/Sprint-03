"use client";
import { Plus } from "lucide-react";
import { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import CadastroJogadora from './components/CadastroJogadora';
import Navigation from './components/navigation_component';
import Link from 'next/link';
import MatchCard from "./components/Matchcards";

function Home() {
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);

  const handleOpenCadastro = () => {
    setIsCadastroOpen(true);
  };

  const handleCloseCadastro = () => {
    setIsCadastroOpen(false);
  };
  const matches = [
    {
      teamA: "São Paulo",
      teamALogo: "/img/SPFC.png",
      teamB: "Corinthians",
      teamBLogo: "/img/CORINTHIANS.png",
      competition: "Copa São Paulo",
      date: "17 JUL, 2025",
      time: "14:00",
      score: "2 - 1",
    },
    {
      teamA: "Palmeiras",
      teamALogo: "/img/PALMEIRAS.png",
      teamB: "Juventus-SP",
      teamBLogo: "/img/JUVENTUS-SP.png",
      competition: "Copa São Paulo",
      date: "17 JUL, 2025",
      time: "14:00",
      score: "1 - 0",
    },
    {
      teamA: "Grêmio",
      teamALogo: "/img/GREMIO.png",
      teamB: "Internacional",
      teamBLogo: "/img/INTERNACIONAL.png",
      competition: "Copa Sul",
      date: "17 JUL, 2025",
      time: "18:00",
      score: "3 - 2",
    },
    {
      teamA: "Juventude",
      teamALogo: "/img/JUVENTUDE.png",
      teamB: "Brasil",
      teamBLogo: "/img/BRASIL.png",
      competition: "Copa Sul",
      date: "17 JUL, 2025",
      time: "18:00",
      score: "0 - 0",
    },
  ];

  return (
    <div className="p-4 sm:p-8 min-h-screen bg-[rgba(0,0,0,0.9)]">
      <div className="rounded-lg p-4 mb-12 mt-12 sm:mt-20">
        <h2 className="text-4xl sm:text-6xl font-semibold text-white mb-6 sm:mb-9 text-center">
          Bem-vinda ao <strong className="text-purple-400">Donas da Bola!</strong>
        </h2>
        <p className="text-lg sm:text-2xl text-white/90 leading-relaxed mb-2 text-center px-0 sm:px-15">
          Aqui o futebol é delas! Conecte-se com outras jogadoras, participe de eventos, inscreva-se em torneios, organize peladas semanais e viva o esporte com segurança e liberdade.
        </p>
        <p className="text-2xl text-white/90 leading-relaxed mb-2 text-center">
          Este é o seu espaço para brilhar, jogar e crescer dentro e fora das quadras. ⚽💜
        </p>
      </div>
      <div>
          <h1 className="text-center font-semibold p-4 text-white bg-purple-600 mx-auto max-w-md text-xl sm:text-3xl border border-black rounded-lg mb-5">Eventos</h1>
      </div>
      <div className="rounded-lg p-3 bg-[rgba(0,0,0,)] border border-purple-600">
         
        <div className="mb-3  p-2 pb-8 rounded-lg mt-5">
          <h3 className="text-2xl font-semibold text-white mb-4 mt-5 ml-5">Copinha de Futebol</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 p-2">
            <div className="bg-white border border-purple-600 rounded-lg p-3 relative">
              <h4 className="font-medium text-gray-800 mb-2">Copa Sul</h4>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <Calendar className="w-4 h-4 mr-1" />
                <span>17 JUL, 2025</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span>18:00</span>
              </div>
              <div className="mt-4 sm:mt-0 sm:absolute sm:right-4 sm:top-1/2 sm:transform sm:-translate-y-1/2 bg-green-500 p-1 rounded-md text-center text-white w-full sm:w-32">
                <Link
                  href="#"
                  className="w-full hover:opacity-80 cursor-pointer block text-white"
                >
                  Mais informações
                </Link>
              </div>
            </div>

            <div className="bg-white border border-purple-600 rounded-lg p-3 relative">
              <h4 className="font-medium text-gray-800 mb-2">Copa São Paulo</h4>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <Calendar className="w-4 h-4 mr-1" />
                <span>17 JUL, 2025</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span>14:00</span>
              </div>
              <div className="mt-4 sm:mt-0 sm:absolute sm:right-4 sm:top-1/2 sm:transform sm:-translate-y-1/2 bg-green-500 p-1 rounded-md text-center text-white w-full sm:w-32">
                <Link
                  href="#"
                  className="w-full hover:opacity-80 cursor-pointer block text-white"
                >
                  Mais informações
                </Link>
              </div>
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-white mb-4 mt-12 sm:mt-25 text-center ">
            Evento corporativo
          </h1>
          <div className="bg-purple-600 text-white rounded-lg p-4 mb-10 mx-auto max-w-xl mt-2 relative">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Futebol Semanal - Gratuito</h3>
              <div className="flex items-center text-sm mb-1">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Rio de Janeiro, Terça-feira 17</span>
              </div>
              <p className="text-sm">Inscrições fecham às 14:15</p>
            </div>
            <Link
                  href="#"
                  className=" hover:opacity-80 cursor-pointer block text-white bg-green-500 p-1 rounded-md text-center w-32"
                >
                  Se inscreva Aqui!
            </Link>
          </div>
        </div>
        </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center font-semibold p-4 text-white bg-purple-600 mt-12 sm:mt-20 mb-5 mx-auto max-w-md text-xl sm:text-3xl border border-black rounded-lg">Próximos Jogos</h1>
        </div>
        <div className="max-w-4xl mx-auto">
          {matches.map((match, index) => (
            <MatchCard key={index} {...match} />
          ))}
         </div>      
          <CadastroJogadora 
            isOpen={isCadastroOpen} 
            onClose={handleCloseCadastro} 
          />
    </div>
  );
}

export default Home;
