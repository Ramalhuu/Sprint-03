import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email e senha são obrigatórios." },
        { status: 400 }
      );
    }

    let users = [];
    try {
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf8");
        users = data ? JSON.parse(data) : [];
      }
    } catch (readError) {
      console.error("Erro ao ler arquivo de usuários:", readError);
    }

    if (users.length === 0) {
      return NextResponse.json(
        { success: false, error: "Nenhum usuário cadastrado ainda." },
        { status: 404 }
      );
    }

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { success: false, error: "Email ou senha incorretos." },
        { status: 401 }
      );
    }

    // ✅ Retorna apenas o nome e email, sem senha
    return NextResponse.json({
      success: true,
      message: "Login realizado com sucesso!",
      user: { nome: user.nome, email: user.email },
    });
  } catch (error) {
    console.error("Erro no login:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
