import { useState, useCallback } from 'react';
import { useError } from '../ErrorContext'; 

// Hook personalizado para gerenciar estado de API calls
export function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addError, addSuccess } = useError();

  const execute = useCallback(async (apiCall, options = {}) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await apiCall();
      
      if (!response.success) {
        const errorMessage = response.error || 'Erro na requisição';
        setError(errorMessage);
        
        if (!options.silent) {
          addError(errorMessage, options.context || 'API');
        }
        
        throw new Error(errorMessage);
      }
      
      if (options.successMessage) {
        addSuccess(options.successMessage, options.context || 'API');
      }
      
      return response.data;
    } catch (err) {
      const errorMessage = err.message || 'Erro inesperado';
      setError(errorMessage);
      
      if (!options.silent) {
        addError(errorMessage, options.context || 'API');
      }
      
      throw err;
    } finally {
      setLoading(false);
    }
  }, [addError, addSuccess]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    loading,
    error,
    execute,
    clearError
  };
}

// Hook específico para operações com jogadoras
export function useJogadoras() {
  const { loading, error, execute, clearError } = useApi();
  const [jogadoras, setJogadoras] = useState([]);

  const fetchJogadoras = useCallback(async (filters = {}) => {
    // CAMINHO CORRIGIDO
    const apiService = (await import('../../../services/api')).default;
    const data = await execute(
      () => apiService.getJogadoras(filters),
      { 
        context: 'Listagem de Jogadoras',
        silent: true // Não mostrar erro global, será tratado no componente
      }
    );
    setJogadoras(data.jogadoras || []);
    return data;
  }, [execute]);

  const createJogadora = useCallback(async (jogadoraData) => {
    // CAMINHO CORRIGIDO
    const apiService = (await import('../../../services/api')).default;
    const data = await execute(
      () => apiService.createJogadora(jogadoraData),
      { 
        context: 'Cadastro de Jogadora',
        successMessage: 'Jogadora cadastrada com sucesso!'
      }
    );
    // Atualizar lista local
    setJogadoras(prev => [...prev, data]);
    return data;
  }, [execute]);

  const updateJogadora = useCallback(async (id, jogadoraData) => {
    // CAMINHO CORRIGIDO
    const apiService = (await import('../../../services/api')).default;
    const data = await execute(
      () => apiService.updateJogadora(id, jogadoraData),
      { 
        context: 'Atualização de Jogadora',
        successMessage: 'Jogadora atualizada com sucesso!'
      }
    );
    // Atualizar lista local
    setJogadoras(prev => prev.map(j => j.id === id ? data : j));
    return data;
  }, [execute]);

  const deleteJogadora = useCallback(async (id) => {
    // CAMINHO CORRIGIDO
    const apiService = (await import('../../../services/api')).default;
    await execute(
      () => apiService.deleteJogadora(id),
      { 
        context: 'Remoção de Jogadora',
        successMessage: 'Jogadora removida com sucesso!'
      }
    );
    // Remover da lista local
    setJogadoras(prev => prev.filter(j => j.id !== id));
  }, [execute]);

  return {
    jogadoras,
    loading,
    error,
    fetchJogadoras,
    createJogadora,
    updateJogadora,
    deleteJogadora,
    clearError
  };
}

// Hook para estatísticas
export function useEstatisticas() {
  const { loading, error, execute, clearError } = useApi();
  const [estatisticas, setEstatisticas] = useState(null);

  const fetchEstatisticas = useCallback(async () => {
    // CAMINHO CORRIGIDO
    const apiService = (await import('../../../services/api.js')).default;
    const data = await execute(
      () => apiService.getEstatisticas(),
      { 
        context: 'Estatísticas',
        silent: true
      }
    );
    setEstatisticas(data);
    return data;
  }, [execute]);

  return {
    estatisticas,
    loading,
    error,
    fetchEstatisticas,
    clearError
  };
}