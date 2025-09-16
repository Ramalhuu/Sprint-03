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

  const addError = useCallback((error, context = '') => {
    const errorObj = {
      id: Date.now(),
      message: error.message || error,
      context,
      timestamp: new Date().toISOString(),
      type: 'error'
    };
    setErrors(prev => [...prev, errorObj]);
    setTimeout(() => {
      removeError(errorObj.id);
    }, 5000);
    return errorObj.id;
  }, []);

  const addSuccess = useCallback((message, context = '') => {
    const notificationObj = {
      id: Date.now(),
      message,
      context,
      timestamp: new Date().toISOString(),
      type: 'success'
    };
    setNotifications(prev => [...prev, notificationObj]);
    setTimeout(() => {
      removeNotification(notificationObj.id);
    }, 3000);
    return notificationObj.id;
  }, []);

  const addWarning = useCallback((message, context = '') => {
    const notificationObj = {
      id: Date.now(),
      message,
      context,
      timestamp: new Date().toISOString(),
      type: 'warning'
    };
    setNotifications(prev => [...prev, notificationObj]);
    setTimeout(() => {
      removeNotification(notificationObj.id);
    }, 4000);
    return notificationObj.id;
  }, []);

  const removeError = useCallback((id) => {
    setErrors(prev => prev.filter(error => error.id !== id));
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  const clearAll = useCallback(() => {
    setErrors([]);
    setNotifications([]);
  }, []);

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
