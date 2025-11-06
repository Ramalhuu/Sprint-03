import { NextResponse } from "next/server";
import apiService from "../../../services/api";

export async function GET(request) {
  try {
    // A API Route pode receber parâmetros de busca (query parameters)
    const { searchParams } = new URL(request.url);
    const filters = {
      posicao: searchParams.get('posicao'),
      cidade: searchParams.get('cidade'),
      experiencia: searchParams.get('experiencia'),
    };

    const result = await apiService.getJogadoras(filters);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Erro ao listar jogadoras:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor ao listar jogadoras" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const jogadoraData = await request.json();
    const result = await apiService.createJogadora(jogadoraData);

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Erro ao cadastrar jogadora:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor ao cadastrar jogadora" },
      { status: 500 }
    );
  }
}
