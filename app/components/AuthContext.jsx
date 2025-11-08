"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const API_BASE_URL = "/Api"; 

  // 🔹 LOGIN
  const login = async (email, password) => {
    try {
      console.log("🟢 Enviando login:", { email, password });

      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("🔵 Resposta do login:", data);

      if (data.success) {
        const cleanUser = {
          nome: data.user?.nome || "",
          email: data.user?.email || "",
        };

        setUser(cleanUser);
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(cleanUser));
        }

        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      console.error("🔴 Erro no login:", error);
      return { success: false, error: "Erro de conexão com o servidor." };
    }
  };

  // 🔹 REGISTRO
  const register = async (nome, email, password) => {
    try {
      console.log("🟢 Enviando cadastro:", { nome, email, password });

      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, password }),
      });

      const data = await response.json();
      console.log("🔵 Resposta do registro:", data);

      if (data.success) {
        const cleanUser = {
          nome: data.user?.nome || "",
          email: data.user?.email || "",
        };

        setUser(cleanUser);
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(cleanUser));
        }

        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      console.error("🔴 Erro no registro:", error);
      return { success: false, error: "Erro de conexão com o servidor." };
    }
  };

  // 🔹 LOGOUT
  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
    }
    router.push("/login");
  };

  // 🔹 CARREGAR USUÁRIO SALVO
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const parsed = JSON.parse(storedUser);
          if (parsed.email && parsed.nome) {
            setUser(parsed);
          }
        } catch (e) {
          console.error("Erro ao ler user do localStorage:", e);
        }
      }
    }
    setLoading(false);
  }, []);

  const value = { user, login, register, logout, loading };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
