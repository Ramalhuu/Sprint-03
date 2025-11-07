"use client";
import { Plus, Calendar, Clock } from "lucide-react";
import { useState } from 'react';
import CadastroJogadora from './components/CadastroJogadora';
import Navigation from './components/navigation_component';
import Link from 'next/link';
import MatchCard from "./components/Matchcards";

function Home() {
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);

  const handleOpenCadastro = () => setIsCadastroOpen(true);
  const handleCloseCadastro = () => setIsCadastroOpen(false);

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
    <div className="p-4 min-h-screen bg-[rgba(0,0,0,0.9)]">
      {/* HEADER */}
      <div className="rounded-lg p-4 mb-16 mt-20 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6">
          Bem-vinda ao <strong className="text-purple-400">Donas da Bola!</strong>
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed mb-4">
          Aqui o futebol é delas! Conecte-se com outras jogadoras, participe de eventos, inscreva-se em torneios, organize peladas semanais e viva o esporte com segurança e liberdade.
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
          Este é o seu espaço para brilhar, jogar e crescer dentro e fora das quadras. ⚽💜
        </p>
      </div>

      {/* EVENTOS */}
      <div>
        <h1 className="text-center font-semibold p-3 sm:p-4 text-white bg-purple-600 text-2xl sm:text-3xl border border-black rounded-lg mb-6 max-w-2xl mx-auto">
          Eventos
        </h1>
      </div>

      <div className="rounded-lg p-3 border border-purple-600 bg-transparent">
        <div className="mb-3 p-2 pb-8 rounded-lg mt-5">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 mt-5 ml-3 sm:ml-5">
            Copinha de Futebol
          </h3>

          {/* GRID DE EVENTOS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 p-2">
            {/* CARD 1 */}
            <div className="bg-white border border-purple-600 rounded-lg p-4 relative">
              <h4 className="font-medium text-gray-800 mb-2">Copa Sul</h4>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <Calendar className="w-4 h-4 mr-1" />
                <span>17 JUL, 2025</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-6">
                <Clock className="w-4 h-4 mr-1" />
                <span>18:00</span>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white border border-purple-600 rounded-lg p-4 relative">
              <h4 className="font-medium text-gray-800 mb-2">Copa São Paulo</h4>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <Calendar className="w-4 h-4 mr-1" />
                <span>17 JUL, 2025</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-6">
                <Clock className="w-4 h-4 mr-1" />
                <span>14:00</span>
              </div>
            </div>
          </div>

          {/* EVENTO CORPORATIVO */}
          <h1 className="text-xl sm:text-2xl font-semibold text-white mb-4 mt-12 text-center">
            Evento Corporativo
          </h1>
          <div className="bg-purple-600 text-white rounded-lg p-4 mb-10 mx-2 sm:mx-6 relative">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold mb-1">Futebol Semanal - Gratuito</h3>
                <div className="flex items-center justify-center sm:justify-start text-sm mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Rio de Janeiro, Terça-feira 17</span>
                </div>
                <p className="text-sm">Inscrições fecham às 14:15</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div>
        <h1 className="text-center font-semibold p-3 sm:p-4 text-white bg-purple-600 mt-20 mb-5 text-2xl sm:text-3xl border border-black rounded-lg max-w-2xl mx-auto">
          Próximos Jogos
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {matches.map((match, index) => (
          <MatchCard key={index} {...match} />
        ))}
      </div>

      <CadastroJogadora isOpen={isCadastroOpen} onClose={handleCloseCadastro} />
    </div>
  );
}

export default Home;
