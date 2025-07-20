import { modules } from "@/features/module/services/module.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await modules.getAllModules();
    return NextResponse.json(data);
  } catch (error) {
    // Tangkap error untuk logging
    console.error("[MODULES_GET]", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
