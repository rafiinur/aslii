"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Clock,
  XCircle,
  FileText,
  User,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { AcceptApprovalDialog } from "@/app/(protected)/approval/components/dialog/accept-approval-dialog";
import { RejectApprovalDialog } from "@/app/(protected)/approval/components/dialog/reject-approval-dialog";

const LeaveApprovalPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Pengajuan",
      shortTitle: "Dibuat",
      description: "Karyawan mengajukan permohonan cuti",
      status: "completed",
      icon: FileText,
      date: "15 Des 2024, 09:00",
      actor: "John Doe (Karyawan)",
    },
    {
      id: 2,
      title: "Review Supervisor",
      shortTitle: "Supervisor",
      description: "Menunggu persetujuan dari supervisor langsung",
      status: "active",
      icon: User,
      date: "15 Des 2024, 10:30",
      actor: "Jane Smith (Supervisor)",
    },
    {
      id: 3,
      title: "Review HR",
      shortTitle: "HR",
      description: "Verifikasi saldo cuti dan kebijakan perusahaan",
      status: "pending",
      icon: Calendar,
      date: "-",
      actor: "HR Department",
    },
    {
      id: 4,
      title: "Persetujuan Akhir",
      shortTitle: "Selesai",
      description: "Konfirmasi final dan notifikasi ke karyawan",
      status: "pending",
      icon: CheckCircle,
      date: "-",
      actor: "System",
    },
  ];

  const leaveDetails = {
    employeeName: "John Doe",
    employeeId: "EMP001",
    leaveType: "Cuti Tahunan",
    startDate: "20 Des 2024",
    endDate: "27 Des 2024",
    duration: "6 hari kerja",
    reason: "Liburan keluarga akhir tahun",
    remainingLeave: "8 hari",
  };

  const getStepStatus = (status) => {
    switch (status) {
      case "completed":
        return {
          color: "bg-green-500 border-green-500",
          textColor: "text-green-600",
          bgColor: "bg-green-50",
          lineColor: "bg-green-500",
        };
      case "active":
        return {
          color: "bg-blue-500 border-blue-500",
          textColor: "text-blue-600",
          bgColor: "bg-blue-50",
          lineColor: "bg-gray-300",
        };
      case "rejected":
        return {
          color: "bg-red-500 border-red-500",
          textColor: "text-red-600",
          bgColor: "bg-red-50",
          lineColor: "bg-gray-300",
        };
      default:
        return {
          color: "bg-gray-300 border-gray-300",
          textColor: "text-gray-500",
          bgColor: "bg-gray-50",
          lineColor: "bg-gray-300",
        };
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Selesai
          </Badge>
        );
      case "active":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            Sedang Diproses
          </Badge>
        );
      case "rejected":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            Ditolak
          </Badge>
        );
      default:
        return <Badge variant="secondary">Menunggu</Badge>;
    }
  };

  const handleApprove = () => {
    if (currentStep < steps.length) {
      // Update current step to completed
      const updatedSteps = [...steps];
      const currentStepIndex = updatedSteps.findIndex(
        (step) => step.id === currentStep
      );
      updatedSteps[currentStepIndex].status = "completed";

      // Move to next step if available
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
        if (currentStep + 1 <= steps.length) {
          const nextStepIndex = updatedSteps.findIndex(
            (step) => step.id === currentStep + 1
          );
          if (nextStepIndex !== -1) {
            updatedSteps[nextStepIndex].status = "active";
            updatedSteps[nextStepIndex].date = new Date().toLocaleDateString(
              "id-ID",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }
            );
          }
        }
      }
    }
  };

  const handleReject = () => {
    const updatedSteps = [...steps];
    const currentStepIndex = updatedSteps.findIndex(
      (step) => step.id === currentStep
    );
    updatedSteps[currentStepIndex].status = "rejected";

    // Set semua step selanjutnya menjadi pending
    for (let i = currentStepIndex + 1; i < updatedSteps.length; i++) {
      updatedSteps[i].status = "pending";
    }
  };

  const getCurrentStepData = () => {
    return steps.find((step) => step.id === currentStep);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Progress Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Ringkasan Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-3xl font-bold text-green-600">
                {steps.filter((s) => s.status === "completed").length}
              </div>
              <div className="text-sm text-green-700 font-medium">Selesai</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-3xl font-bold text-blue-600">
                {steps.filter((s) => s.status === "active").length}
              </div>
              <div className="text-sm text-blue-700 font-medium">
                Sedang Proses
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-gray-600">
                {steps.filter((s) => s.status === "pending").length}
              </div>
              <div className="text-sm text-gray-700 font-medium">Menunggu</div>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="text-3xl font-bold text-red-600">
                {steps.filter((s) => s.status === "rejected").length}
              </div>
              <div className="text-sm text-red-700 font-medium">Ditolak</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Progress Keseluruhan
              </span>
              <span className="text-sm font-medium text-gray-900">
                {Math.round(
                  (steps.filter((s) => s.status === "completed").length /
                    steps.length) *
                    100
                )}
                %
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    (steps.filter((s) => s.status === "completed").length /
                      steps.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Horizontal Stepper */}
      <Card>
        <CardHeader>
          <CardTitle>Proses Persetujuan</CardTitle>
          <CardDescription>Tracking status persetujuan cuti</CardDescription>
        </CardHeader>
        <CardContent className="px-6 py-8">
          {/* Mobile Responsive Stepper */}
          <div className="relative">
            {/* Desktop View */}
            <div className="hidden md:flex items-center justify-between">
              {steps.map((step, index) => {
                const statusStyle = getStepStatus(step.status);
                const IconComponent = step.icon;
                const isLast = index === steps.length - 1;

                return (
                  <div key={step.id} className="flex items-center flex-1">
                    {/* Step Circle and Content */}
                    <div className="flex flex-col items-center text-center relative">
                      {/* Circle */}
                      <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${statusStyle.color} relative z-10`}
                      >
                        {step.status === "completed" ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : step.status === "rejected" ? (
                          <XCircle className="w-6 h-6 text-white" />
                        ) : step.status === "active" ? (
                          <Clock className="w-6 h-6 text-white" />
                        ) : (
                          <IconComponent className="w-6 h-6 text-white" />
                        )}
                      </div>

                      {/* Title */}
                      <div className="mt-3 max-w-[120px]">
                        <h3
                          className={`text-sm font-semibold ${statusStyle.textColor}`}
                        >
                          {step.shortTitle}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {step.actor}
                        </p>
                        {step.date !== "-" && (
                          <p className="text-xs text-gray-400 mt-1">
                            {step.date}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Connecting Line */}
                    {!isLast && (
                      <div className="flex-1 mx-4">
                        <div
                          className={`h-0.5 ${
                            step.status === "completed"
                              ? "bg-green-500"
                              : "bg-gray-300"
                          }`}
                        ></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-4">
              {steps.map((step, index) => {
                const statusStyle = getStepStatus(step.status);
                const IconComponent = step.icon;

                return (
                  <div key={step.id} className="flex items-center space-x-4">
                    {/* Circle */}
                    <div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${statusStyle.color}`}
                    >
                      {step.status === "completed" ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : step.status === "rejected" ? (
                        <XCircle className="w-5 h-5 text-white" />
                      ) : step.status === "active" ? (
                        <Clock className="w-5 h-5 text-white" />
                      ) : (
                        <IconComponent className="w-5 h-5 text-white" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`font-semibold ${statusStyle.textColor}`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                      <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                        <span>👤 {step.actor}</span>
                        {step.date !== "-" && <span>📅 {step.date}</span>}
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="flex-shrink-0">
                      {getStatusBadge(step.status)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl mb-2">Persetujuan Cuti</CardTitle>
              <CardDescription>
                Pengajuan cuti dari {leaveDetails.employeeName}
              </CardDescription>
            </div>
            {getStatusBadge("active")}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-medium text-gray-600">Jenis Cuti</p>
              <p className="font-semibold">{leaveDetails.leaveType}</p>
            </div>
            <div>
              <p className="font-medium text-gray-600">Periode</p>
              <p className="font-semibold">
                {leaveDetails.startDate} - {leaveDetails.endDate}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-600">Durasi</p>
              <p className="font-semibold">{leaveDetails.duration}</p>
            </div>
            {/* <div>
              <p className="font-medium text-gray-600">Sisa Cuti</p>
              <p className="font-semibold">{leaveDetails.remainingLeave}</p>
            </div> */}
          </div>
          <div className="mt-4">
            <p className="font-medium text-gray-600">Alasan</p>
            <p className="text-sm">{leaveDetails.reason}</p>
          </div>
        </CardContent>
      </Card>

      {/* Current Step Details */}
      <Card>
        <CardHeader>
          <CardTitle>Detail Tahap Saat Ini</CardTitle>
          <CardDescription>
            Informasi lengkap tahap {getCurrentStepData()?.title}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                {React.createElement(getCurrentStepData()?.icon, {
                  className: "w-5 h-5 text-white",
                })}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-blue-900">
                  {getCurrentStepData()?.title}
                </h3>
                <p className="text-blue-800 mt-1">
                  {getCurrentStepData()?.description}
                </p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-blue-700">
                  <span>👤 {getCurrentStepData()?.actor}</span>
                  {getCurrentStepData()?.date !== "-" && (
                    <span>📅 {getCurrentStepData()?.date}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      {getCurrentStepData()?.status === "active" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span>Tindakan Diperlukan</span>
            </CardTitle>
            <CardDescription>
              Sebagai {getCurrentStepData()?.actor}, Anda perlu mengambil
              tindakan pada pengajuan ini
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={handleApprove}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Setujui
              </Button>
              <Button variant="destructive" onClick={handleReject}>
                <XCircle className="w-4 h-4 mr-2" />
                Tolak
              </Button>
              <Button variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" />
                Minta Info Tambahan
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex items-center">
        <AcceptApprovalDialog />
        <RejectApprovalDialog />
      </div>
    </div>
  );
};

export default LeaveApprovalPage;
