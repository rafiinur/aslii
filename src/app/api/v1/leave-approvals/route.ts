import { NextResponse } from "next/server";
import { approval } from "@/features/approval/services/approval.service";

export async function GET() {
  try {
    const data = await approval.leave.getLeaveApprovals();
    return NextResponse.json(data);
  } catch (error) {
    // Tangkap error untuk logging
    console.error("[LEAVE_APPROVALS_GET]", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
