import { NextResponse } from "next/server";
import apiService from "../../../../services/api";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const result = await apiService.login(email, password);

    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(result, { status: 401 });
    }
  } catch (error) {
    console.error("Erro no login:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
