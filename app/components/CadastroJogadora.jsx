import React, { useState } from 'react';
import { X, User, Mail, Phone, Calendar, MapPin, Target, Trophy, Clock } from 'lucide-react';
import { useJogadoras } from './hooks/useJogadoras';

function CadastroJogadora({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    idade: '',
    cidade: '',
    posicao: '',
    experiencia: '',
    disponibilidade: ''
  });

  const [errors, setErrors] = useState({});
  const { createJogadora, loading, error, clearError } = useJogadoras();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    if (error) {
      clearError();
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    }

    if (!formData.idade.trim()) {
      newErrors.idade = 'Idade é obrigatória';
    } else if (isNaN(formData.idade) || formData.idade < 16 || formData.idade > 60) {
      newErrors.idade = 'Idade deve ser entre 16 e 60 anos';
    }

    if (!formData.cidade.trim()) {
      newErrors.cidade = 'Cidade é obrigatória';
    }

    if (!formData.posicao) {
      newErrors.posicao = 'Posição é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await createJogadora(formData);
      alert('Cadastro realizado com sucesso! Bem-vinda ao Donas da Bola!');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        idade: '',
        cidade: '',
        posicao: '',
        experiencia: '',
        disponibilidade: ''
      });
      onClose();
    } catch (err) {
      console.error('Erro ao cadastrar jogadora:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center sm:justify-end p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md sm:w-96 max-h-[90vh] overflow-y-auto sm:mr-8 border border-gray-400 shadow-lg">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Cadastro de Jogadora</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded"
            disabled={loading}
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {error && (
          <div className="mx-4 mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 mr-1" />
              Nome Completo *
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.nome ? 'border-red-300' : 'border-gray-300'
              } text-black`}
              placeholder="Digite seu nome completo"
              disabled={loading}
            />
            {errors.nome && <p className="mt-1 text-sm text-red-600">{errors.nome}</p>}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 mr-1" />
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.email ? 'border-red-300' : 'border-gray-300'
              } text-black`}
              placeholder="seu.email@exemplo.com"
              disabled={loading}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 mr-1" />
              Telefone *
            </label>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.telefone ? 'border-red-300' : 'border-gray-300'
              } text-black`}
              placeholder="(11) 99999-9999"
              disabled={loading}
            />
            {errors.telefone && <p className="mt-1 text-sm text-red-600">{errors.telefone}</p>}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 mr-1" />
              Idade *
            </label>
            <input
              type="number"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.idade ? 'border-red-300' : 'border-gray-300'
              } text-black`}
              placeholder="Ex: 25"
              min="16"
              max="60"
              disabled={loading}
            />
            {errors.idade && <p className="mt-1 text-sm text-red-600">{errors.idade}</p>}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              Cidade *
            </label>
            <input
              type="text"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.cidade ? 'border-red-300' : 'border-gray-300'
              } text-black`}
              placeholder="Ex: São Paulo, SP"
              disabled={loading}
            />
            {errors.cidade && <p className="mt-1 text-sm text-red-600">{errors.cidade}</p>}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Target className="w-4 h-4 mr-1" />
              Posição Preferida *
            </label>
            <select
              name="posicao"
              value={formData.posicao}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.posicao ? 'border-red-300' : 'border-gray-300'
              } text-black`}
              disabled={loading}
            >
              <option value="">Selecione sua posição</option>
              <option value="goleira">Goleira</option>
              <option value="zagueira">Zagueira</option>
              <option value="lateral">Lateral</option>
              <option value="volante">Volante</option>
              <option value="meia">Meia</option>
              <option value="atacante">Atacante</option>
              <option value="qualquer">Qualquer posição</option>
            </select>
            {errors.posicao && <p className="mt-1 text-sm text-red-600">{errors.posicao}</p>}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Trophy className="w-4 h-4 mr-1" />
              Nível de Experiência
            </label>
            <select
              name="experiencia"
              value={formData.experiencia}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
              disabled={loading}
            >
              <option value="">Selecione seu nível</option>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediário</option>
              <option value="avancado">Avançado</option>
              <option value="profissional">Profissional</option>
            </select>
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4 mr-1" />
              Disponibilidade
            </label>
            <select
              name="disponibilidade"
              value={formData.disponibilidade}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
              disabled={loading}
            >
              <option value="">Selecione sua disponibilidade</option>
              <option value="manha">Manhã</option>
              <option value="tarde">Tarde</option>
              <option value="noite">Noite</option>
              <option value="fins_de_semana">Fins de semana</option>
              <option value="qualquer_horario">Qualquer horário</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={loading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={`w-full sm:flex-1 py-3 px-4 rounded-lg font-medium text-white transition-colors ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-pink-500 hover:bg-pink-600'
              }`}
              disabled={loading}
            >
              {loading ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroJogadora;