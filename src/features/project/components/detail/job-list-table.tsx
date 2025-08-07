import React from "react";
import { columns } from "./job-list-column";
import { DataTable } from "@/components/data-table";  
import type { ListJob } from "@/features/project/type";

const jobs: ListJob[] = [
    {
    nama_tugas: "Analisis Kebutuhan",
    penanggung_jawab: "Umar Maru",
    tanggal_mulai: "20 Februari 2025",
    tenggat: "5 Maret 2025",
    status: "Selesai",
    },
    {
    nama_tugas: "UI/UX",
    penanggung_jawab: "Tivi Sundari, Cahaya Fitriani",
    tanggal_mulai: "20 Februari 2025",
    tenggat: "30 Maret 2025",
    status: "Berjalan",
    },
];

const JobListTable = () => {
  return <DataTable columns={columns} data={jobs} />;
};

export default JobListTable;