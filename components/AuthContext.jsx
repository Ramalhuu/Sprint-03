import React, { createContext, useContext, useState, useEffect } from 'react';
import useApi from '../hooks/useApi';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verificar se há um usuário logado no localStorage ao inicializar
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedAuth = localStorage.getItem('isAuthenticated');
    
    if (savedUser && savedAuth === 'true') {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
    
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await apiService.login(email, password);
      
      if (response.success) {
        const userData = response.data;
        
        setUser(userData);
        setIsAuthenticated(true);
        
        // Salvar no localStorage
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('isAuthenticated', 'true');
        
        return { success: true };
      } else {
        return { 
          success: false, 
          error: response.error || 'Erro ao fazer login' 
        };
      }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Erro ao fazer login' 
      };
    }
  };

  const logout = async () => {
    try {
      // Chamar API de logout (opcional para mock)
      await apiService.logout();
    } catch (error) {
      console.error('Erro ao fazer logout na API:', error);
    } finally {
      // Sempre limpar estado local
      setUser(null);
      setIsAuthenticated(false);
      
      // Remover do localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('isAuthenticated');
    }
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

