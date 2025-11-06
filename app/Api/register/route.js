import { NextResponse } from "next/server";
import apiService from "../../../../services/api";

export async function POST(request) {
  try {
    const { email, password, username } = await request.json();
    const result = await apiService.register(email, password, username);

    if (result.success) {
      return NextResponse.json(result, { status: 201 });
    } else {
      return NextResponse.json(result, { status: 400 });
    }
  } catch (error) {
    console.error("Erro no registro:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
