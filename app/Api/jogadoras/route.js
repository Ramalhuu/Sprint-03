import { NextResponse } from "next/server";

let jogadoras = [
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
    dataCadastro: "2024-01-15T10:30:00Z",
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
    dataCadastro: "2024-01-20T14:15:00Z",
  },
];

let nextId = 3;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const posicao = searchParams.get("posicao");
    const cidade = searchParams.get("cidade");
    const experiencia = searchParams.get("experiencia");

    let filtered = [...jogadoras];
    if (posicao) filtered = filtered.filter((j) => j.posicao === posicao);
    if (cidade) filtered = filtered.filter((j) =>
      j.cidade.toLowerCase().includes(cidade.toLowerCase())
    );
    if (experiencia)
      filtered = filtered.filter((j) => j.experiencia === experiencia);

    // 🔧 Retorna apenas o array
    return NextResponse.json(filtered, { status: 200 });
  } catch (error) {
    console.error("Erro ao listar jogadoras:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.nome || !body.email) {
      return NextResponse.json(
        { success: false, error: "Campos obrigatórios ausentes" },
        { status: 400 }
      );
    }

    const nova = {
      ...body,
      id: nextId++,
      dataCadastro: new Date().toISOString(),
    };

    jogadoras.push(nova);

    return NextResponse.json(nova, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar jogadora:", error);
    return NextResponse.json(
      { success: false, error: "Erro ao cadastrar jogadora" },
      { status: 500 }
    );
  }
}
