"use client";

import { ColumnDef } from "@tanstack/react-table";

export type LeaveApproval = {
  t_overtime_id: number;
  m_user_profile_id: string;
  t_overtime_tanggal: string;
  t_overtime_waktu_mulai: string;
  t_overtime_waktu_berakhir: string;
  t_overtime_durasi_jam: number;
  t_overtime_status: string;
  pengaju: {
    m_user_profile_nama_lengkap: string;
  };
  approver: any | null;
};

export const overtimeColumns: ColumnDef<LeaveApproval>[] = [
  {
    accessorKey: "pengaju.m_user_profile_nama_lengkap",
    header: "Pengaju",
  },
  {
    accessorKey: "t_overtime_waktu_mulai",
    header: "Tanggal Mulai",
  },
  {
    accessorKey: "t_overtime_waktu_berakhir",
    header: "Tanggal Berakhir",
  },
  {
    accessorKey: "t_overtime_status",
    header: "Status",
  },
];
