import { getAllUsers } from "@/features/auth/services/user.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getAllUsers();

    return NextResponse.json(data);
  } catch (error) {
    // Tangkap error untuk logging
    console.error("[USERS_GET]", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
