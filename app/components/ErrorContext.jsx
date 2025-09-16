"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';

const ErrorContext = createContext();

export function useError() {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError deve ser usado dentro de um ErrorProvider');
  }
  return context;
}

export function ErrorProvider({ children }) {
  const [errors, setErrors] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Adicionar erro
  const addError = useCallback((error, context = '') => {
    const errorObj = {
      id: Date.now(),
      message: error.message || error,
      context,
      timestamp: new Date().toISOString(),
      type: 'error'
    };
    
    setErrors(prev => [...prev, errorObj]);
    
    // Auto-remover após 5 segundos
    setTimeout(() => {
      removeError(errorObj.id);
    }, 5000);
    
    return errorObj.id;
  }, []);

  // Adicionar notificação de sucesso
  const addSuccess = useCallback((message, context = '') => {
    const notificationObj = {
      id: Date.now(),
      message,
      context,
      timestamp: new Date().toISOString(),
      type: 'success'
    };
    
    setNotifications(prev => [...prev, notificationObj]);
    
    // Auto-remover após 3 segundos
    setTimeout(() => {
      removeNotification(notificationObj.id);
    }, 3000);
    
    return notificationObj.id;
  }, []);

  // Adicionar notificação de aviso
  const addWarning = useCallback((message, context = '') => {
    const notificationObj = {
      id: Date.now(),
      message,
      context,
      timestamp: new Date().toISOString(),
      type: 'warning'
    };
    
    setNotifications(prev => [...prev, notificationObj]);
    
    // Auto-remover após 4 segundos
    setTimeout(() => {
      removeNotification(notificationObj.id);
    }, 4000);
    
    return notificationObj.id;
  }, []);

  // Remover erro específico
  const removeError = useCallback((id) => {
    setErrors(prev => prev.filter(error => error.id !== id));
  }, []);

  // Remover notificação específica
  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  // Limpar todos os erros
  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  // Limpar todas as notificações
  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  // Limpar tudo
  const clearAll = useCallback(() => {
    setErrors([]);
    setNotifications([]);
  }, []);

  // Handler global para erros não capturados
  const handleGlobalError = useCallback((error, errorInfo) => {
    console.error('Erro global capturado:', error, errorInfo);
    addError('Ocorreu um erro inesperado. Tente novamente.', 'Global');
  }, [addError]);

  const value = {
    errors,
    notifications,
    addError,
    addSuccess,
    addWarning,
    removeError,
    removeNotification,
    clearErrors,
    clearNotifications,
    clearAll,
    handleGlobalError
  };

  return (
    <ErrorContext.Provider value={value}>
      {children}
    </ErrorContext.Provider>
  );
}

