import { NextResponse } from "next/server";

let jogadoras = global.jogadoras || [];

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.json();
    const index = jogadoras.findIndex((j) => j.id === parseInt(id));

    if (index === -1)
      return NextResponse.json({ error: "Jogadora não encontrada" }, { status: 404 });

    jogadoras[index] = { ...jogadoras[index], ...data };
    return NextResponse.json(jogadoras[index]);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao atualizar jogadora" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    jogadoras = jogadoras.filter((j) => j.id !== parseInt(id));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao deletar jogadora" },
      { status: 500 }
    );
  }
}
