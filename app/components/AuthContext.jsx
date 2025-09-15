// app/components/AuthContext.jsx

"use client"; // ESSA LINHA É FUNDAMENTAL

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Cria o contexto
const AuthContext = createContext(null);

// Provedor de autenticação que vai "embrulhar" toda a aplicação
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Exemplo de função de login
  const login = async (email, password) => {
    // Lógica de login
    console.log(`Tentativa de login com: ${email}, ${password}`);
    // Simula uma API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Supondo que o login foi bem-sucedido
    const authData = { email: email, name: 'Usuário Demo' };
    setUser(authData);
    
    return { success: true };
  };

  // Exemplo de função de logout
  const logout = () => {
    setUser(null);
    router.push('/login');
  };

  useEffect(() => {
    // Lógica para verificar o estado do usuário ao carregar a página
    // Por exemplo, checar um cookie ou local storage
    setLoading(false);
  }, []);

  const value = {
    user,
    login,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook personalizado para usar o contexto
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}