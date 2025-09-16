"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    console.log(`Tentativa de login com: ${email}, ${password}`);
    await new Promise(resolve => setTimeout(resolve, 500));
    const authData = { email: email, name: 'Usuário Demo' };
    setUser(authData);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    router.push('/login');
  };

  useEffect(() => {
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

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}
