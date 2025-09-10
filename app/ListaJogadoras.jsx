import React, { useState, useEffect } from 'react';
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, Trophy, Clock, Star } from 'lucide-react';

function ListaJogadoras({ onBack }) {
  const [jogadoras, setJogadoras] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [filtroPos, setFiltroPos] = useState('');

  useEffect(() => {
    const jogadorasSalvas = localStorage.getItem('jogadoras');
    if (jogadorasSalvas) {
      setJogadoras(JSON.parse(jogadorasSalvas));
    }
  }, []);

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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-purple-600 text-white p-4">
        <div className="flex items-center">
          <button 
            onClick={onBack}
            className="mr-3 p-1 hover:bg-purple-700 rounded"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Jogadoras Cadastradas</h1>
        </div>
      </div>

      {/* Filtros */}
      <div className="p-4 bg-gray-50 border-b">
        <div className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Buscar por nome..."
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <select
              value={filtroPos}
              onChange={(e) => setFiltroPos(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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

      {/* Lista de Jogadoras */}
      <div className="p-4">
        {jogadorasFiltradas.length === 0 ? (
          <div className="text-center py-12">
            <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-500 mb-2">
              {jogadoras.length === 0 ? 'Nenhuma jogadora cadastrada' : 'Nenhuma jogadora encontrada'}
            </h3>
            <p className="text-gray-400">
              {jogadoras.length === 0 
                ? 'Cadastre a primeira jogadora para começar!' 
                : 'Tente ajustar os filtros de busca.'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {jogadorasFiltradas.map((jogadora, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
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
                      <span>Disponível: {jogadora.disponibilidade}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Estatísticas */}
      {jogadoras.length > 0 && (
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

