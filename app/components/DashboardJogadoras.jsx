"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useJogadoras } from "./hooks/useJogadoras";
import { Loader2, Users, Calendar, BarChart3, MapPin, Zap, Clock } from "lucide-react";

// Componente auxiliar para os cards de métricas
const MetricCard = ({ title, value, icon: Icon, className = "" }) => (
  <div className={\`p-4 bg-white rounded-lg shadow-md flex items-center justify-between \${className}\`}>
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
    {Icon && <Icon className="w-8 h-8 text-indigo-500 opacity-70" />}
  </div>
);

// Componente auxiliar para gráficos simples (simulação de gráfico de barras)
const BarChart = ({ data, title, dataKey, valueKey, color = "bg-indigo-500" }) => {
  const total = Object.values(data).reduce((sum, count) => sum + count, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3">
        {Object.entries(data).map(([key, count]) => (
          <div key={key}>
            <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
              <span>{key}</span>
              <span>{count} ({((count / total) * 100).toFixed(1)}%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={\`h-2.5 rounded-full \${color}\`}
                style={{ width: \`\${(count / total) * 100}%\` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function DashboardJogadoras() {
  const { jogadoras, loading, error, fetchJogadoras } = useJogadoras();
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (!dataFetched) {
      fetchJogadoras();
      setDataFetched(true);
    }
  }, [fetchJogadoras, dataFetched]);

  const dashboardData = useMemo(() => {
    if (jogadoras.length === 0) {
      return {
        totalJogadoras: 0,
        mediaIdade: "N/A",
        ultimoCadastro: "N/A",
        posicoes: {},
        experiencias: {},
        disponibilidades: {},
        cidades: {},
      };
    }

    const totalJogadoras = jogadoras.length;
    const somaIdades = jogadoras.reduce((sum, j) => sum + (j.idade || 0), 0);
    const mediaIdade = (somaIdades / totalJogadoras).toFixed(1);

    const ultimoCadastroTimestamp = Math.max(
      ...jogadoras.map((j) => new Date(j.dataCadastro).getTime())
    );
    const ultimoCadastro = new Date(ultimoCadastroTimestamp).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const countBy = (key) =>
      jogadoras.reduce((acc, j) => {
        const value = j[key] || "Outro";
        acc[value] = (acc[value] || 0) + 1;
        return acc;
      }, {});

    const posicoes = countBy("posicao");
    const experiencias = countBy("experiencia");
    const disponibilidades = countBy("disponibilidade");
    const cidades = countBy("cidade");

    return {
      totalJogadoras,
      mediaIdade,
      ultimoCadastro,
      posicoes,
      experiencias,
      disponibilidades,
      cidades,
    };
  }, [jogadoras]);

  if (loading && !dataFetched) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
        <span className="ml-2 text-lg text-gray-600">Carregando dados do dashboard...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-100 border border-red-400 text-red-700 rounded-lg">
        <p className="font-bold">Erro ao carregar o dashboard:</p>
        <p>{error}</p>
      </div>
    );
  }

  const {
    totalJogadoras,
    mediaIdade,
    ultimoCadastro,
    posicoes,
    experiencias,
    disponibilidades,
    cidades,
  } = dashboardData;

  // Função para formatar as chaves para exibição
  const formatKey = (key) => {
    switch (key) {
      case "atacante": return "Atacante";
      case "meia": return "Meia";
      case "goleira": return "Goleira";
      case "zagueira": return "Zagueira";
      case "lateral": return "Lateral";
      case "intermediario": return "Intermediário";
      case "avancado": return "Avançado";
      case "profissional": return "Profissional";
      case "noite": return "Noite";
      case "tarde": return "Tarde";
      case "manha": return "Manhã";
      case "qualquer_horario": return "Qualquer Horário";
      case "fins_de_semana": return "Fins de Semana";
      default: return key;
    }
  };

  const formattedPosicoes = Object.fromEntries(
    Object.entries(posicoes).map(([key, value]) => [formatKey(key), value])
  );
  const formattedExperiencias = Object.fromEntries(
    Object.entries(experiencias).map(([key, value]) => [formatKey(key), value])
  );
  const formattedDisponibilidades = Object.fromEntries(
    Object.entries(disponibilidades).map(([key, value]) => [formatKey(key), value])
  );
  
  // Ordenar as cidades por contagem decrescente e pegar as top 5
  const sortedCidades = Object.entries(cidades)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);
  const formattedCidades = Object.fromEntries(sortedCidades);


  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard de Jogadoras</h1>

      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Total de Jogadoras"
          value={totalJogadoras}
          icon={Users}
          className="bg-indigo-100 border-l-4 border-indigo-500"
        />
        <MetricCard
          title="Média de Idade"
          value={mediaIdade}
          icon={Calendar}
          className="bg-green-100 border-l-4 border-green-500"
        />
        <MetricCard
          title="Último Cadastro"
          value={ultimoCadastro}
          icon={Clock}
          className="bg-yellow-100 border-l-4 border-yellow-500"
        />
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <BarChart
          title="Distribuição por Posição"
          data={formattedPosicoes}
          color="bg-indigo-500"
        />
        <BarChart
          title="Distribuição por Nível de Experiência"
          data={formattedExperiencias}
          color="bg-green-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart
          title="Distribuição por Disponibilidade"
          data={formattedDisponibilidades}
          color="bg-yellow-500"
        />
        <BarChart
          title="Top 5 Cidades com Mais Jogadoras"
          data={formattedCidades}
          color="bg-red-500"
        />
      </div>
    </div>
  );
}
