import React, { useState } from 'react';
import { X, User, Mail, Phone, MapPin, Calendar, Trophy } from 'lucide-react';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro quando o usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
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
    }

    if (!formData.cidade.trim()) {
      newErrors.cidade = 'Cidade é obrigatória';
    }

    if (!formData.posicao.trim()) {
      newErrors.posicao = 'Posição é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Recuperar jogadoras existentes do localStorage
      const jogadorasExistentes = localStorage.getItem('jogadoras');
      const jogadoras = jogadorasExistentes ? JSON.parse(jogadorasExistentes) : [];
      
      // Adicionar nova jogadora
      const novaJogadora = {
        ...formData,
        id: Date.now(), // ID simples baseado em timestamp
        dataCadastro: new Date().toISOString()
      };
      
      jogadoras.push(novaJogadora);
      
      // Salvar no localStorage
      localStorage.setItem('jogadoras', JSON.stringify(jogadoras));
      
      // Mostrar mensagem de sucesso
      alert('Cadastro realizado com sucesso! Bem-vinda ao Donas da Bola!');
      console.log('Dados do cadastro:', novaJogadora);
      
      // Resetar formulário
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
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-purple-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <h2 className="text-lg font-semibold">Cadastro de Jogadora</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-purple-700 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <User className="w-4 h-4 inline mr-1" />
              Nome Completo *
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.nome ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Digite seu nome completo"
            />
            {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Mail className="w-4 h-4 inline mr-1" />
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="seu.email@exemplo.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Phone className="w-4 h-4 inline mr-1" />
              Telefone *
            </label>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.telefone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="(11) 99999-9999"
            />
            {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>}
          </div>

          {/* Idade */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar className="w-4 h-4 inline mr-1" />
              Idade *
            </label>
            <input
              type="number"
              name="idade"
              value={formData.idade}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.idade ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Ex: 25"
              min="16"
              max="50"
            />
            {errors.idade && <p className="text-red-500 text-sm mt-1">{errors.idade}</p>}
          </div>

          {/* Cidade */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <MapPin className="w-4 h-4 inline mr-1" />
              Cidade *
            </label>
            <input
              type="text"
              name="cidade"
              value={formData.cidade}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.cidade ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Ex: São Paulo, SP"
            />
            {errors.cidade && <p className="text-red-500 text-sm mt-1">{errors.cidade}</p>}
          </div>

          {/* Posição */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Trophy className="w-4 h-4 inline mr-1" />
              Posição Preferida *
            </label>
            <select
              name="posicao"
              value={formData.posicao}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.posicao ? 'border-red-500' : 'border-gray-300'
              }`}
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
            {errors.posicao && <p className="text-red-500 text-sm mt-1">{errors.posicao}</p>}
          </div>

          {/* Experiência */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nível de Experiência
            </label>
            <select
              name="experiencia"
              value={formData.experiencia}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Selecione seu nível</option>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediário</option>
              <option value="avancado">Avançado</option>
              <option value="profissional">Profissional</option>
            </select>
          </div>

          {/* Disponibilidade */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Disponibilidade
            </label>
            <select
              name="disponibilidade"
              value={formData.disponibilidade}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Selecione sua disponibilidade</option>
              <option value="manha">Manhã</option>
              <option value="tarde">Tarde</option>
              <option value="noite">Noite</option>
              <option value="fins-de-semana">Fins de semana</option>
              <option value="qualquer">Qualquer horário</option>
            </select>
          </div>

          {/* Botões */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-medium"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroJogadora;

