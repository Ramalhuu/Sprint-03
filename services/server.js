const express = require("express");
const cors = require("cors");
const apiService = require("./api"); // Importa o apiService (agora CommonJS)

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rota de registro
app.post("/api/register", async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const result = await apiService.register(email, password, username);
    if (result.success) {
      res.status(201).json(result);
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    console.error("Erro no registro:", error);
    res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
});

// Rota de login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await apiService.login(email, password);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(401).json(result);
    }
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ success: false, error: "Erro interno do servidor" });
  }
});

// Rota de health check (opcional, para verificar se a API está rodando)
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "API de autenticação funcionando" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor da API de autenticação rodando na porta ${PORT}`);
});