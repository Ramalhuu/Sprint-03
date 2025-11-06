import { NextResponse } from "next/server";
import apiService from "../../../../services/api";

// Rota para atualizar (PUT)
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const jogadoraData = await request.json();
    const result = await apiService.updateJogadora(id, jogadoraData);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Erro ao atualizar jogadora:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Erro interno do servidor ao atualizar jogadora" },
      { status: 500 }
    );
  }
}

// Rota para deletar (DELETE)
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await apiService.deleteJogadora(id);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erro ao deletar jogadora:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Erro interno do servidor ao deletar jogadora" },
      { status: 500 }
    );
  }
}
