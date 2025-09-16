"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">
              Donas da Bola
            </h3>
            <p className="text-purple-100 text-sm leading-relaxed">
              Conectando jogadoras de futebol em todo o Brasil. 
              Aqui o futebol é delas! Participe de eventos, 
              torneios e encontre sua comunidade esportiva.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="#" 
                className="text-purple-200 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-purple-200 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-purple-200 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-purple-100 hover:text-white transition-colors duration-200 text-sm"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  href="/listajogadoras" 
                  className="text-purple-100 hover:text-white transition-colors duration-200 text-sm"
                >
                  Procurar Jogadoras
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Suporte
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/central-de-ajuda" 
                  className="text-purple-100 hover:text-white transition-colors duration-200 text-sm"
                >
                  Central de Ajuda
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-200" />
                <span className="text-purple-100 text-sm">
                  contato@donasdabola.com.br
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-200" />
                <span className="text-purple-100 text-sm">
                  (11) 9999-9999
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-purple-200 mt-0.5" />
                <span className="text-purple-100 text-sm">
                  São Paulo, SP<br />
                  Brasil
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-purple-100 text-sm">
              <span>© 2025 Donas da Bola. Todos os direitos reservados.</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-100 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>para o futebol feminino</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
