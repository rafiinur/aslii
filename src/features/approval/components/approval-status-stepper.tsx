// moved from src/app/(protected)/approval/components/approval-status-stepper.tsx
// ...existing code...
// components/status/horizontal-approval-status.tsx

"use client";

import { cn } from "@/lib/utils"; // Pastikan path ini benar
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  XCircle,
  Clock,
  User,
  Briefcase,
  FileText,
  Hourglass,
} from "lucide-react";
import React from "react";

// --- Tipe Data (Sama seperti sebelumnya) ---
type ApprovalStep = {
  id: number;
  name: string;
  icon: React.ElementType;
  status: "completed" | "in_progress" | "pending" | "rejected";
  processedBy?: string;
  processedAt?: Date;
  comments?: string;
};

type ApprovalRequest = {
  requestId: string;
  requestType: string;
  applicantName: string;
  submissionDate: Date;
  overallStatus: "Disetujui" | "Ditolak" | "Sedang Diproses";
  steps: ApprovalStep[];
};

const mockLeaveRequest: ApprovalRequest = {
  requestId: "CUTI-2025-06-003",
  requestType: "Pengajuan Cuti Tahunan",
  applicantName: "Budi Santoso",
  submissionDate: new Date("2025-06-22T09:00:00Z"),
  overallStatus: "Sedang Diproses",
  steps: [
    {
      id: 1,
      name: "Pengajuan Dibuat",
      icon: User,
      status: "completed",
      processedBy: "Budi Santoso",
      processedAt: new Date("2025-06-22T09:05:00Z"),
      comments: "Permohonan cuti untuk keperluan keluarga.",
    },
    {
      id: 2,
      name: "Persetujuan Atasan",
      icon: Briefcase,
      status: "in_progress",
      processedBy: "Rina Wijaya (Manajer)",
    },
    {
      id: 3,
      name: "Verifikasi HRD",
      icon: FileText,
      status: "pending",
    },
  ],
};

const formatDate = (date?: Date) => {
  if (!date) return null;
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
};

const getStatusBadgeColor = (status: ApprovalRequest["overallStatus"]) => {
  switch (status) {
    case "Disetujui":
      return "bg-green-100 text-green-800 hover:bg-green-100 border-green-300 dark:bg-green-900/20 dark:text-green-400 dark:border-green-600";
    case "Ditolak":
      return "bg-red-100 text-red-800 hover:bg-red-100 border-red-300 dark:bg-red-900/20 dark:text-red-400 dark:border-red-600";
    case "Sedang Diproses":
    default:
      return "bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-300 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-600";
  }
};

const getStepStatusInfo = (status: ApprovalStep["status"]) => {
  switch (status) {
    case "completed":
      return {
        icon: <Check className="w-6 h-6" />,
        color: "text-green-700 dark:text-green-400",
        bgColor: "bg-green-50 dark:bg-green-900/20",
        borderColor: "border-green-600 dark:border-green-500",
      };
    case "in_progress":
      return {
        icon: <Clock className="w-6 h-6 animate-pulse" />,
        color: "text-blue-700 dark:text-blue-400",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        borderColor: "border-blue-600 dark:border-blue-500",
      };
    case "rejected":
      return {
        icon: <XCircle className="w-6 h-6" />,
        color: "text-red-700 dark:text-red-400",
        bgColor: "bg-red-50 dark:bg-red-900/20",
        borderColor: "border-red-600 dark:border-red-500",
      };
    case "pending":
    default:
      return {
        icon: <Hourglass className="w-6 h-6" />,
        color: "text-gray-500 dark:text-gray-400",
        bgColor: "bg-gray-100 dark:bg-gray-800",
        borderColor: "border-gray-300 dark:border-gray-600",
      };
  }
};

const getStatusText = (status: ApprovalStep["status"]) => {
  return status.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
};

// --- Komponen Utama ---
export default function ApprovalStatusStepper({
  data = mockLeaveRequest,
}: {
  data?: ApprovalRequest;
}) {
  return (
    <div className="px-6 py-4 space-y-8">
      {/* --- Stepper Navigasi Visual Horizontal --- */}
      <div className="flex items-start">
        {data.steps.map((step, index) => {
          const statusInfo = getStepStatusInfo(step.status);
          const isLastStep = index === data.steps.length - 1;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center text-center flex-shrink-0 w-28 sm:w-36">
                <div
                  className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    statusInfo.bgColor,
                    statusInfo.borderColor,
                    statusInfo.color
                  )}
                >
                  {statusInfo.icon}
                </div>
                <p
                  className={cn(
                    "mt-2 text-xs sm:text-sm font-semibold",
                    statusInfo.color
                  )}
                >
                  {step.name}
                </p>
              </div>

              {!isLastStep && (
                <div
                  className={cn(
                    "h-1 flex-1 rounded-full transition-colors duration-500",
                    // Garis akan hijau jika langkah saat ini sudah selesai
                    step.status === "completed"
                      ? "bg-green-600 dark:bg-green-500"
                      : "bg-gray-200 dark:bg-gray-700",
                    // Posisikan garis di tengah secara vertikal
                    "mt-7"
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* --- Detail Informasi Gabungan --- */}
      <div className="space-y-6">
        {/* Detail Permohonan Umum */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <CardDescription>{data.requestId}</CardDescription>
                <CardTitle>{data.requestType}</CardTitle>
              </div>
              <Badge
                className={cn(
                  "text-sm",
                  getStatusBadgeColor(data.overallStatus)
                )}
              >
                {data.overallStatus}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <div className="flex">
              <p className="w-32 text-gray-500 dark:text-gray-400 shrink-0">
                Pemohon
              </p>
              <p className="font-medium text-gray-800 dark:text-gray-200">
                : {data.applicantName}
              </p>
            </div>
            <div className="flex">
              <p className="w-32 text-gray-500 dark:text-gray-400 shrink-0">
                Tanggal Pengajuan
              </p>
              <p className="font-medium text-gray-800 dark:text-gray-200">
                : {formatDate(data.submissionDate)}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Riwayat Proses */}
        <Card>
          <CardHeader>
            <CardTitle>Riwayat Proses</CardTitle>
            <CardDescription>
              Detail dari setiap tahapan persetujuan yang telah atau akan
              dilewati.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {data.steps.map((step, index) => (
                <div
                  key={step.id}
                  className={cn(
                    index > 0 && "pt-6 border-t dark:border-gray-700"
                  )}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold dark:text-gray-100">
                      {step.name}
                    </h4>
                    <Badge
                      variant="outline"
                      className={cn(
                        getStepStatusInfo(step.status).color,
                        "border-current"
                      )}
                    >
                      {getStatusText(step.status)}
                    </Badge>
                  </div>
                  <div className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                    {step.processedBy && (
                      <div className="flex">
                        <p className="w-32 text-gray-500 dark:text-gray-400 shrink-0">
                          Oleh
                        </p>
                        <p className="font-medium">: {step.processedBy}</p>
                      </div>
                    )}
                    {step.processedAt && (
                      <div className="flex">
                        <p className="w-32 text-gray-500 dark:text-gray-400 shrink-0">
                          Pada
                        </p>
                        <p className="font-medium">
                          : {formatDate(step.processedAt)}
                        </p>
                      </div>
                    )}
                    {step.comments && (
                      <div className="flex items-start pt-2">
                        <p className="w-32 text-gray-500 dark:text-gray-400 shrink-0">
                          Komentar
                        </p>
                        <p className="italic">: {step.comments}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
