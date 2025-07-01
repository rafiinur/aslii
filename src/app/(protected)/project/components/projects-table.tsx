import React from "react";
import { columns } from "./projects-column";
import { DataTable } from "@/components/data-table";
import type { ListProject } from "@/features/project/type";

const projects: ListProject[] = [
  {
    nama_proyek: "Proyek A",
    deskripsi: "This is description",
    jumlah_tasks: 5,
    pic: "Puja",
    deadline: "23-1-25",
    status: "On Progress",
  },
  {
    nama_proyek: "Proyek A",
    deskripsi: "This is description",
    jumlah_tasks: 5,
    pic: "Puji",
    deadline: "23-1-25",
    status: "On Progress",
  },
  {
    nama_proyek: "Proyek A",
    deskripsi: "This is description",
    jumlah_tasks: 5,
    pic: "Haji",
    deadline: "23-1-25",
    status: "On Progress",
  },
  {
    nama_proyek: "Proyek A",
    deskripsi: "This is description",
    jumlah_tasks: 5,
    pic: "Jaka",
    deadline: "23-1-25",
    status: "On Progress",
  },
];

const ProjectsTable = () => {
  return <DataTable columns={columns} data={projects} />;
};

export default ProjectsTable;
