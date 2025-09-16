// CadastroJogadora.jsx

"use client"; // Já está aqui, ótimo!

import React, { useState, useCallback } from 'react'; // Importe useCallback se for usar
import { X, User, Mail, Phone, Calendar, MapPin, Target, Trophy, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation'; // ✅ Importe de next/navigation

function CadastroJogadora({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: '', email: '', telefone: '', idade: '', cidade: '',
    posicao: '', experiencia: '', disponibilidade: ''
  });
  const [errors, setErrors] = useState({});
  const { createJogadora, loading, error, clearError } = useJogadoras();
  const router = useRouter(); // ✅ Obtenha o router aqui

  const handleChange = (e) => { /* ... seu código handleChange ... */ };
  const validateForm = () => { /* ... seu código validateForm ... */ };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await createJogadora(formData);
      alert('Cadastro realizado com sucesso! Bem-vinda ao Donas da Bola!');
      
      // Resetar formulário
      setFormData({
        nome: '', email: '', telefone: '', idade: '', cidade: '',
        posicao: '', experiencia: '', disponibilidade: ''
      });
      
      onClose(); // Fecha o modal
      router.push('/'); // ✅ Redireciona para a home page
    } catch (err) {
      console.error('Erro ao cadastrar jogadora:', err);
    }
  };

  if (!isOpen) return null;

  return (
    // ... (resto do seu JSX para o modal) ...
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Cadastro de Jogadora</h2>
          <button 
            onClick={onClose} // Este onClick apenas fecha o modal. A navegação acontece após o submit.
            className="p-1 hover:bg-gray-100 rounded"
            disabled={loading}
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        {/* ... (resto do modal) ... */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* ... (seus campos de formulário) ... */}

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose} // Este botão "Cancelar" apenas fecha o modal
              className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={loading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={`flex-1 py-3 px-4 rounded-lg font-medium text-white transition-colors ${
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