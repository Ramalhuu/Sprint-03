const apiService = {
  async getJogadoras(filters = {}) {
    const query = new URLSearchParams(filters).toString();
    const res = await fetch(`/Api/jogadoras${query ? `?${query}` : ""}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Erro ao buscar jogadoras");
    return res.json();
  },

  async createJogadora(data) {
    const res = await fetch("/Api/jogadoras", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Erro ao criar jogadora");
    return res.json();
  },

  async updateJogadora(id, data) {
    const res = await fetch(`/Api/jogadoras/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Erro ao atualizar jogadora");
    return res.json();
  },

  async deleteJogadora(id) {
    const res = await fetch(`/Api/jogadoras/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Erro ao deletar jogadora");
    return res.json();
  },
};

export default apiService;
