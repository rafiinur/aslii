"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Paperclip } from "lucide-react";

export type LeaveApproval = {
  t_cuti_id: number;
  m_user_profile_id: string;
  t_cuti_tanggal_mulai: string;
  t_cuti_tanggal_berakhir: string;
  t_cuti_status: string;
  t_cuti_durasi_hari: number;
  t_cuti_attachment: string;
  pengaju: {
    m_user_profile_nama_lengkap: string;
  };
  approver: null | {
    m_user_profile_nama_lengkap: string;
  };
  r_cuti_tipe: {
    r_cuti_tipe_nama: string;
  };
};

export const leaveColumns: ColumnDef<LeaveApproval>[] = [
  {
    accessorKey: "pengaju.m_user_profile_nama_lengkap",
    header: "Pengaju",
  },
  {
    accessorKey: "t_cuti_tanggal_mulai",
    header: "Tanggal Mulai",
  },
  {
    accessorKey: "t_cuti_tanggal_berakhir",
    header: "Tanggal Berakhir",
  },

  {
    accessorKey: "r_cuti_tipe.r_cuti_tipe_nama",
    header: "Tipe Cuti",
  },
  {
    accessorKey: "t_cuti_status",
    header: "Status",
  },

  {
    accessorKey: "t_cuti_attachment",
    header: "Attachment",
    cell: ({ row }) => {
      const attachment = row.getValue("t_cuti_attachment");
      return attachment ? (
        <a
          href={`https://xrcgpigrlqjxsskkqrbl.supabase.co/storage/v1/object/public/attachment/${attachment}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Paperclip />
        </a>
      ) : (
        <span className="text-gray-500">Tidak ada attachment</span>
      );
    },
  },
];
