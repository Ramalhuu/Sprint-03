"use client";

import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Clock, Star, RefreshCw, AlertCircle } from 'lucide-react';
import { useJogadoras } from '../components/hooks/useJogadoras';
import { useRouter } from 'next/navigation';

function ListaJogadoras() {
  const [filtro, setFiltro] = useState('');
  const [filtroPos, setFiltroPos] = useState('');
  const { jogadoras, loading, error, fetchJogadoras, clearError } = useJogadoras();

  useEffect(() => {
    loadJogadoras();
  }, []);

  const loadJogadoras = async () => {
    try {
      await fetchJogadoras();
    } catch (err) {
      console.error('Erro ao carregar jogadoras:', err);
    }
  };

  const handleRefresh = () => {
    clearError();
    loadJogadoras();
  };

  const jogadorasFiltradas = jogadoras.filter(jogadora => {
    const nomeMatch = jogadora.nome.toLowerCase().includes(filtro.toLowerCase());
    const posicaoMatch = filtroPos === '' || jogadora.posicao === filtroPos;
    return nomeMatch && posicaoMatch;
  });

  const getExperienciaIcon = (experiencia) => {
    switch (experiencia) {
      case 'iniciante':
        return <Star className="w-4 h-4 text-yellow-400" />;
      case 'intermediario':
        return (
          <div className="flex">
            <Star className="w-4 h-4 text-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400" />
          </div>
        );
      case 'avancado':
        return (
          <div className="flex">
            <Star className="w-4 h-4 text-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400" />
          </div>
        );
      case 'profissional':
        return (
          <div className="flex">
            <Star className="w-4 h-4 text-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400" />
          </div>
        );
      default:
        return null;
    }
  };

  const getPosicaoColor = (posicao) => {
    const colors = {
      'goleira': 'bg-red-100 text-red-800',
      'zagueira': 'bg-blue-100 text-blue-800',
      'lateral': 'bg-green-100 text-green-800',
      'volante': 'bg-purple-100 text-purple-800',
      'meia': 'bg-yellow-100 text-yellow-800',
      'atacante': 'bg-orange-100 text-orange-800',
      'qualquer': 'bg-gray-100 text-gray-800'
    };
    return colors[posicao] || 'bg-gray-100 text-gray-800';
  };

  const formatDisponibilidade = (disponibilidade) => {
    const mapping = {
      'manha': 'Manhã',
      'tarde': 'Tarde',
      'noite': 'Noite',
      'fins_de_semana': 'Fins de semana',
      'qualquer_horario': 'Qualquer horário'
    };
    return mapping[disponibilidade] || disponibilidade;
  };

  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }} className="min-h-screen">
      <div className="p-4 bg-gray-50 border-b">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Buscar por nome..."
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="flex-1 p-3 border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              disabled={loading}
            />
            <button
              onClick={handleRefresh}
              className={`p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors ${
                loading ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={loading}
              title="Atualizar lista"
            >
              <RefreshCw className={`w-5 h-5 text-gray-600 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
          <div>
            <select
              value={filtroPos}
              onChange={(e) => setFiltroPos(e.target.value)}
              className="w-full p-3 border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              disabled={loading}
            >
              <option value="">Todas as posições</option>
              <option value="goleira">Goleira</option>
              <option value="zagueira">Zagueira</option>
              <option value="lateral">Lateral</option>
              <option value="volante">Volante</option>
              <option value="meia">Meia</option>
              <option value="atacante">Atacante</option>
              <option value="qualquer">Qualquer posição</option>
            </select>
          </div>
        </div>
      </div>


      {error && (
        <div className="mx-4 mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span className="flex-1">{error}</span>
          <button
            onClick={handleRefresh}
            className="ml-2 text-sm underline hover:no-underline"
          >
            Tentar novamente
          </button>
        </div>
      )}


      {loading && (
        <div className="p-8 text-center">
          <RefreshCw className="w-8 h-8 text-purple-600 animate-spin mx-auto mb-2" />
          <p className="text-gray-600">Carregando jogadoras...</p>
        </div>
      )}

      {!loading && (
        <div className="p-4">
          {jogadorasFiltradas.length === 0 ? (
            <div className="text-center py-12">
              <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-500 mb-2">
                {jogadoras.length === 0 ? 'Nenhuma jogadora cadastrada' : 'Nenhuma jogadora encontrada'}
              </h3>
              <p className="text-gray-400 mb-4">
                {jogadoras.length === 0 
                  ? 'Cadastre a primeira jogadora para começar!' 
                  : 'Tente ajustar os filtros de busca.'}
              </p>
              {error && (
                <button
                  onClick={handleRefresh}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Tentar carregar novamente
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {jogadorasFiltradas.map((jogadora) => (
                <div key={jogadora.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="bg-purple-100 rounded-full p-2 mr-3">
                        <User className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{jogadora.nome}</h3>
                        <div className="flex items-center mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPosicaoColor(jogadora.posicao)}`}>
                            {jogadora.posicao.charAt(0).toUpperCase() + jogadora.posicao.slice(1)}
                          </span>
                          {jogadora.experiencia && (
                            <div className="ml-2 flex items-center">
                              {getExperienciaIcon(jogadora.experiencia)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{jogadora.idade} anos</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{jogadora.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{jogadora.telefone}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{jogadora.cidade}</span>
                    </div>
                    {jogadora.disponibilidade && (
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-gray-400" />
                        <span>Disponível: {formatDisponibilidade(jogadora.disponibilidade)}</span>
                      </div>
                    )}
                  </div>

                  {jogadora.dataCadastro && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500">
                        Cadastrada em: {new Date(jogadora.dataCadastro).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}


      {!loading && jogadoras.length > 0 && (
        <div className="p-4 bg-gray-50 border-t">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Total: <span className="font-semibold">{jogadoras.length}</span> jogadoras cadastradas
              {filtro || filtroPos ? (
                <span> • Exibindo: <span className="font-semibold">{jogadorasFiltradas.length}</span></span>
              ) : null}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListaJogadoras;

