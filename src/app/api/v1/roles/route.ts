import { roles } from "@/features/role/services/role.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await roles.getAllRoles();
    return NextResponse.json(data);
  } catch (error) {
    // Tangkap error untuk logging
    console.error("[ROLES_GET]", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
