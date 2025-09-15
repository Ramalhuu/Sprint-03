"use client";
import { useState, useCallback } from "react";
import useApi from "./useApi";   // ✅ import do hook genérico

export function useJogadoras() {
  const { loading, error, execute, clearError } = useApi();
  const [jogadoras, setJogadoras] = useState([]);

  const fetchJogadoras = useCallback(async (filters = {}) => {
    const apiService = (await import("../../../services/api.js")).default;
    const data = await execute(
      () => apiService.getJogadoras(filters),
      { 
        context: "Listagem de Jogadoras",
        silent: true
      }
    );
    setJogadoras(data.jogadoras || []);
    return data;
  }, [execute]);

  const createJogadora = useCallback(async (jogadoraData) => {
    const apiService = (await import("../../../services/api.js")).default;
    const data = await execute(
      () => apiService.createJogadora(jogadoraData),
      { 
        context: "Cadastro de Jogadora",
        successMessage: "Jogadora cadastrada com sucesso!"
      }
    );
    setJogadoras(prev => [...prev, data]);
    return data;
  }, [execute]);

  const updateJogadora = useCallback(async (id, jogadoraData) => {
    const apiService = (await import("../../../services/api.js")).default;
    const data = await execute(
      () => apiService.updateJogadora(id, jogadoraData),
      { 
        context: "Atualização de Jogadora",
        successMessage: "Jogadora atualizada com sucesso!"
      }
    );
    setJogadoras(prev => prev.map(j => j.id === id ? data : j));
    return data;
  }, [execute]);

  const deleteJogadora = useCallback(async (id) => {
    const apiService = (await import("../../../services/api.js")).default;
    await execute(
      () => apiService.deleteJogadora(id),
      { 
        context: "Remoção de Jogadora",
        successMessage: "Jogadora removida com sucesso!"
      }
    );
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
