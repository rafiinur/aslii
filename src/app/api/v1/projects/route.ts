import { projects } from "@/features/project/services/project.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await projects.getAllProjects(1, 10);
    return NextResponse.json(data);
  } catch (error) {
    // Tangkap error untuk logging
    console.error("[PROJECT_GET]", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
