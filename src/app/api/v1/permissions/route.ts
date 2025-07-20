import { permissions } from "@/features/permission/service/permission.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await permissions.getAllPermissions();
    return NextResponse.json(data);
  } catch (error) {
    // Tangkap error untuk logging
    console.error("[PERMISSIONS_GET]", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
