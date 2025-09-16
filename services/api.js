// /services/api.js

const API_URL = "http://localhost:3001";

const apiService = {

  async getJogadoras(filters = {}) {

    const query = new URLSearchParams(filters).toString();
    const res = await fetch(`${API_URL}/jogadoras?${query}`);
    if (!res.ok) throw new Error("Erro ao buscar jogadoras");
    const data = await res.json();
    return data;
  },


  async createJogadora(jogadoraData) {
    const res = await fetch(`${API_URL}/jogadoras`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jogadoraData),
    });
    if (!res.ok) throw new Error("Erro ao cadastrar jogadora");
    const data = await res.json();
    return data;
  },


  async updateJogadora(id, jogadoraData) {
    const res = await fetch(`${API_URL}/jogadoras/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jogadoraData),
    });
    if (!res.ok) throw new Error("Erro ao atualizar jogadora");
    const data = await res.json();
    return data;
  },


  async deleteJogadora(id) {
    const res = await fetch(`${API_URL}/jogadoras/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Erro ao deletar jogadora");
    return true;
  },


  async login(email, password) {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      return { success: false, error: "Credenciais inválidas" };
    }
    const data = await res.json();
    return { success: true, data };
  },


  async logout() {

    await fetch(`${API_URL}/logout`, { method: "POST" });
  },


  async getEstatisticas() {
    const res = await fetch(`${API_URL}/estatisticas`);
    if (!res.ok) throw new Error("Erro ao buscar estatísticas");
    const data = await res.json();
    return data;
  },
};

export default apiService;

