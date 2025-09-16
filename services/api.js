
const mockJogadoras = [
  {
    id: 1,
    nome: "Ana Silva",
    email: "ana.silva@email.com",
    telefone: "(11) 99999-1111",
    idade: 25,
    cidade: "São Paulo, SP",
    posicao: "atacante",
    experiencia: "intermediario",
    disponibilidade: "noite",
    dataCadastro: "2024-01-15T10:30:00Z"
  },
  {
    id: 2,
    nome: "Maria Santos",
    email: "maria.santos@email.com",
    telefone: "(11) 99999-2222",
    idade: 28,
    cidade: "Rio de Janeiro, RJ",
    posicao: "meia",
    experiencia: "avancado",
    disponibilidade: "tarde",
    dataCadastro: "2024-01-20T14:15:00Z"
  },
  {
    id: 3,
    nome: "Carla Oliveira",
    email: "carla.oliveira@email.com",
    telefone: "(11) 99999-3333",
    idade: 22,
    cidade: "Belo Horizonte, MG",
    posicao: "goleira",
    experiencia: "profissional",
    disponibilidade: "qualquer_horario",
    dataCadastro: "2024-02-01T09:00:00Z"
  },
  {
    id: 4,
    nome: "Juliana Costa",
    email: "juliana.costa@email.com",
    telefone: "(11) 99999-4444",
    idade: 30,
    cidade: "Porto Alegre, RS",
    posicao: "zagueira",
    experiencia: "avancado",
    disponibilidade: "manha",
    dataCadastro: "2024-02-10T16:45:00Z"
  },
  {
    id: 5,
    nome: "Fernanda Lima",
    email: "fernanda.lima@email.com",
    telefone: "(11) 99999-5555",
    idade: 26,
    cidade: "Salvador, BA",
    posicao: "lateral",
    experiencia: "intermediario",
    disponibilidade: "fins_de_semana",
    dataCadastro: "2024-02-15T11:20:00Z"
  }
];

let jogadorasData = [...mockJogadoras];
let nextId = 6;

const apiService = {

  async getJogadoras(filters = {}) {

    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filteredJogadoras = [...jogadorasData];
    
    if (filters.posicao) {
      filteredJogadoras = filteredJogadoras.filter(j => j.posicao === filters.posicao);
    }
    if (filters.cidade) {
      filteredJogadoras = filteredJogadoras.filter(j => 
        j.cidade.toLowerCase().includes(filters.cidade.toLowerCase())
      );
    }
    if (filters.experiencia) {
      filteredJogadoras = filteredJogadoras.filter(j => j.experiencia === filters.experiencia);
    }
    
    return { jogadoras: filteredJogadoras };
  },

  async createJogadora(jogadoraData) {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const novaJogadora = {
      ...jogadoraData,
      id: nextId++,
      dataCadastro: new Date().toISOString()
    };
    
    jogadorasData.push(novaJogadora);
    return novaJogadora;
  },

  async updateJogadora(id, jogadoraData) {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const index = jogadorasData.findIndex(j => j.id === parseInt(id));
    if (index === -1) {
      throw new Error("Jogadora não encontrada");
    }
    
    jogadorasData[index] = { ...jogadorasData[index], ...jogadoraData };
    return jogadorasData[index];
  },

  async deleteJogadora(id) {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const index = jogadorasData.findIndex(j => j.id === parseInt(id));
    if (index === -1) {
      throw new Error("Jogadora não encontrada");
    }
    
    jogadorasData.splice(index, 1);
    return true;
  },

  async login(email, password) {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (email && password) {
      return { 
        success: true, 
        data: { 
          email, 
          name: 'Usuário Demo',
          token: 'demo-token-123'
        } 
      };
    }
    
    return { success: false, error: "Credenciais inválidas" };
  },

  async logout() {

    await new Promise(resolve => setTimeout(resolve, 200));
    return true;
  },


  async getEstatisticas() {

    await new Promise(resolve => setTimeout(resolve, 400));
    
    const totalJogadoras = jogadorasData.length;
    const posicoes = jogadorasData.reduce((acc, j) => {
      acc[j.posicao] = (acc[j.posicao] || 0) + 1;
      return acc;
    }, {});
    
    return {
      totalJogadoras,
      posicoes,
      ultimoCadastro: jogadorasData.length > 0 ? 
        Math.max(...jogadorasData.map(j => new Date(j.dataCadastro).getTime())) : null
    };
  },
};

export default apiService;

