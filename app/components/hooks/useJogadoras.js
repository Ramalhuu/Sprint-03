"use client";
import { useState, useCallback } from "react";
import useApi from "./useApi";

export function useJogadoras() {
  const { loading, error, execute, clearError } = useApi();
  const [jogadoras, setJogadoras] = useState([]);

  const fetchJogadoras = useCallback(async (filters = {}) => {
    const query = new URLSearchParams(filters).toString();
    const url = `/api/jogadoras${query ? `?${query}` : ''}`;
    const data = await execute(
      async () => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erro ao buscar jogadoras: ${response.statusText}`);
        }
        return response.json();
      },
      { 
        context: "Listagem de Jogadoras",
        silent: true
      }
    );
    setJogadoras(data.jogadoras || []);
    return data;
  }, [execute]);

  const createJogadora = useCallback(async (jogadoraData) => {
    const data = await execute(
      async () => {
        const response = await fetch('/api/jogadoras', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jogadoraData),
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `Erro ao cadastrar jogadora: ${response.statusText}`);
        }
        return response.json();
      },
      { 
        context: "Cadastro de Jogadora",
        successMessage: "Jogadora cadastrada com sucesso!"
      }
    );
    setJogadoras(prev => [...prev, data]);
    return data;
  }, [execute]);

  const updateJogadora = useCallback(async (id, jogadoraData) => {
    const data = await execute(
      async () => {
        const response = await fetch(`/api/jogadoras/${id}`, { // Assumindo que a rota de update será /api/jogadoras/[id]
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jogadoraData),
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `Erro ao atualizar jogadora: ${response.statusText}`);
        }
        return response.json();
      },
      { 
        context: "Atualização de Jogadora",
        successMessage: "Jogadora atualizada com sucesso!"
      }
    );
    setJogadoras(prev => prev.map(j => j.id === id ? data : j));
    return data;
  }, [execute]);

  const deleteJogadora = useCallback(async (id) => {
    await execute(
      async () => {
        const response = await fetch(`/api/jogadoras/${id}`, { // Assumindo que a rota de delete será /api/jogadoras/[id]
          method: 'DELETE',
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `Erro ao remover jogadora: ${response.statusText}`);
        }
        return response.json();
      },
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
