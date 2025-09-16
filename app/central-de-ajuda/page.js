"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  Phone,
  HelpCircle,
  ArrowLeft
} from 'lucide-react';

const CentralDeAjuda = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqItems = [
    {
      pergunta: "Como criar uma conta no Donas da Bola?",
      resposta: "No momento estamos apenas testando essa funcionalidade. Em breve você poderá criar sua conta diretamente na plataforma. Fique atenta às atualizações! Mas já pode clicar em 'Cadastrar-se' no menu superior para se cadastrar e ficar visível aos times interessados."
    },
    {
      pergunta: "Como encontrar jogadoras na minha região?",
      resposta: "Use a página 'Procurar Jogadoras' no menu principal. Você pode filtrar por localização, idade, posição preferida e nível de habilidade. Nossa ferramenta de busca mostrará jogadoras próximas a você."
    },
    {
      pergunta: "Como participar de eventos e torneios?",
      resposta: "Em breve! Estamos finalizando essa funcionalidade para você. Fique atenta às atualizações no nosso blog e redes sociais para saber quando estará disponível."
    },
    {
      pergunta: "Posso criar meu próprio evento?",
      resposta: "Em breve! Estamos finalizando essa funcionalidade para você. Fique atenta às atualizações no nosso blog e redes sociais para saber quando estará disponível."
    },
    {
      pergunta: "Como reportar comportamento inadequado?",
      resposta: "Em breve! Estamos finalizando essa funcionalidade para você. Fique atenta às atualizações no nosso blog e redes sociais para saber quando estará disponível."
    },
    {
      pergunta: "A plataforma é gratuita?",
      resposta: "Sim, o Donas da Bola é completamente gratuito para todas as jogadoras. Nosso objetivo é conectar a comunidade do futebol feminino sem barreiras financeiras."
    },
    {
      pergunta: "Como alterar minhas informações de perfil?",
      resposta: "Em breve! Estamos finalizando essa funcionalidade para você. Fique atenta às atualizações no nosso blog e redes sociais para saber quando estará disponível."
    },
    {
      pergunta: "Posso usar a plataforma pelo celular?",
      resposta: "Sim! Nossa plataforma é totalmente responsiva e funciona perfeitamente em dispositivos móveis. Você pode acessar todas as funcionalidades pelo navegador do seu smartphone."
    }
  ];

  const filteredFaq = faqItems.filter(item =>
    item.pergunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.resposta.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Voltar ao início</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Central de Ajuda</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Como podemos ajudar você?
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Encontre respostas rápidas para suas dúvidas ou entre em contato conosco
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Digite sua dúvida aqui..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 text-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perguntas Frequentes
          </h2>
          <div className="max-w-4xl mx-auto">
            {filteredFaq.length > 0 ? (
              <div className="space-y-4">
                {filteredFaq.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg font-medium text-gray-900">
                        {item.pergunta}
                      </span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-purple-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-purple-600" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-700 leading-relaxed">
                          {item.resposta}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-500">
                  Nenhuma pergunta encontrada para "{searchTerm}"
                </p>
                <p className="text-gray-400 mt-2">
                  Tente usar palavras-chave diferentes ou entre em contato conosco
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Ainda precisa de ajuda?
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Nossa equipe está sempre pronta para ajudar você
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Email
              </h3>
              <p className="text-gray-600 mb-4">
                Envie sua dúvida por email
              </p>
              <a 
                href="mailto:ajuda@donasdabola.com.br"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Enviar Email
              </a>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Telefone
              </h3>
              <p className="text-gray-600 mb-4">
                Fale conosco por telefone
              </p>
              <a 
                href="tel:+5511999999999"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors inline-block"
              >
                (11) 9999-9999
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentralDeAjuda;
