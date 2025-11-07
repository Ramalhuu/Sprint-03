import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(request) {
  try {
    const { email, password, nome } = await request.json();

    if (!email || !password || !nome) {
      return NextResponse.json(
        { success: false, error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    let users = [];
    try {
      const data = fs.readFileSync(filePath, "utf8");
      users = data ? JSON.parse(data) : [];
    } catch (readError) {
      // Se o arquivo não existir, users será um array vazio.
    }

    if (users.find(u => u.email === email)) {
      return NextResponse.json(
        { success: false, error: "E-mail já cadastrado." },
        { status: 409 }
      );
    }

    const newUser = { id: Date.now(), nome, email, password };
    users.push(newUser);

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    return NextResponse.json({
      success: true,
      message: "Usuário cadastrado com sucesso!",
      user: { nome, email },
    });
  } catch (error) {
    console.error("Erro no cadastro:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
