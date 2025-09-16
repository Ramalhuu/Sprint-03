"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Mail, 
  Phone,
  HelpCircle,
  Users,
  Shield,
  Settings,
  CreditCard,
  ArrowLeft
} from 'lucide-react';

const CentralDeAjuda = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categorias = [
    {
      icon: <Users className="w-6 h-6" />,
      titulo: "Conta e Perfil",
      descricao: "Gerenciar sua conta, perfil e configurações pessoais",
      cor: "bg-blue-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      titulo: "Segurança",
      descricao: "Privacidade, segurança e proteção de dados",
      cor: "bg-green-500"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      titulo: "Configurações",
      descricao: "Personalizar sua experiência na plataforma",
      cor: "bg-purple-500"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      titulo: "Pagamentos",
      descricao: "Informações sobre planos e pagamentos",
      cor: "bg-orange-500"
    }
  ];

  const faqItems = [
    {
      pergunta: "Como criar uma conta no Donas da Bola?",
      resposta: "Para criar uma conta, clique no botão 'Cadastrar' no topo da página. Preencha seus dados pessoais, escolha um nome de usuário único e crie uma senha segura. Após confirmar seu email, sua conta estará ativa."
    },
    {
      pergunta: "Como encontrar jogadoras na minha região?",
      resposta: "Use a página 'Procurar Jogadoras' no menu principal. Você pode filtrar por localização, idade, posição preferida e nível de habilidade. Nossa ferramenta de busca mostrará jogadoras próximas a você."
    },
    {
      pergunta: "Como participar de eventos e torneios?",
      resposta: "Na página inicial, você encontrará uma seção de eventos próximos. Clique em 'Ver Detalhes' do evento que te interessa e depois em 'Participar'. Alguns eventos podem ter requisitos específicos ou taxa de inscrição."
    },
    {
      pergunta: "Posso criar meu próprio evento?",
      resposta: "Sim! Usuárias verificadas podem criar eventos. Acesse seu perfil, clique em 'Criar Evento' e preencha as informações necessárias como data, local, tipo de evento e número de participantes."
    },
    {
      pergunta: "Como reportar comportamento inadequado?",
      resposta: "Se você encontrar comportamento inadequado, clique no botão 'Reportar' no perfil da usuária ou evento. Nossa equipe de moderação analisará o caso em até 24 horas e tomará as medidas necessárias."
    },
    {
      pergunta: "A plataforma é gratuita?",
      resposta: "Sim, o Donas da Bola é completamente gratuito para todas as jogadoras. Nosso objetivo é conectar a comunidade do futebol feminino sem barreiras financeiras."
    },
    {
      pergunta: "Como alterar minhas informações de perfil?",
      resposta: "Acesse 'Meu Perfil' no menu do usuário, clique em 'Editar Perfil' e atualize as informações desejadas. Não esqueça de salvar as alterações ao finalizar."
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
      {/* Header */}
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
            <div className="w-24"></div> {/* Spacer para centralizar o título */}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Como podemos ajudar você?
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Encontre respostas rápidas para suas dúvidas ou entre em contato conosco
          </p>
          
          {/* Barra de Pesquisa */}
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
        {/* Categorias de Ajuda */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Categorias de Ajuda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categorias.map((categoria, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 cursor-pointer group hover:-translate-y-1"
              >
                <div className={`${categoria.cor} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {categoria.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {categoria.titulo}
                </h3>
                <p className="text-gray-600 text-sm">
                  {categoria.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
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

        {/* Contato Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Ainda precisa de ajuda?
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Nossa equipe está sempre pronta para ajudar você
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Chat Online */}
            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Chat Online
              </h3>
              <p className="text-gray-600 mb-4">
                Converse conosco em tempo real
              </p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Iniciar Chat
              </button>
            </div>

            {/* Email */}
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

            {/* Telefone */}
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