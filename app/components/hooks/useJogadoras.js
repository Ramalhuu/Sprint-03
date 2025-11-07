"use client";
import { useState } from "react";
import useApi from "./useApi";

export function useJogadoras() {
  const [jogadoras, setJogadoras] = useState([]);
  const { loading, error, execute, clearError } = useApi();

  // 🔹 Buscar jogadoras
  const fetchJogadoras = async () => {
    await execute(async () => {
      const res = await fetch("/Api/jogadoras");
      if (!res.ok) throw new Error("Erro ao carregar jogadoras");
      const data = await res.json();
      
      // ✅ CORREÇÃO: A API retorna o array diretamente, não dentro de uma propriedade 'jogadoras'
      setJogadoras(data); 
      
    }, { context: "fetchJogadoras" });
  };

  // 🔹 Criar nova jogadora
  const createJogadora = async (novaJogadora) => {
    return await execute(async () => {
      const res = await fetch("/Api/jogadoras", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novaJogadora),
      });

      if (!res.ok) throw new Error("Erro ao cadastrar jogadora");
      const data = await res.json();

      // Atualiza o estado local para exibir na lista
      setJogadoras((prev) => [...prev, data]);

      return data;
    }, { context: "createJogadora" });
  };

  return {
    jogadoras,
    loading,
    error,
    fetchJogadoras,
    createJogadora,
    clearError,
  };
}