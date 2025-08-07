import React from "react";
import { columns } from "./team-column";
import { DataTable } from "@/components/data-table";
import type { ListTeam } from "@/features/project/type";

const teamMembers: ListTeam[] = [
  {
    nama_anggota: "Umar Maru",
    peran: "Project Manager",
  },
  {
    nama_anggota: "Tivi Sundari",
    peran: "UI/UX Designer",
  },
  {
    nama_anggota: "Cahaya Fitriani",
    peran: "UI/UX Designer",
  },
];

const TeamTable = () => {
  return <DataTable columns={columns} data={teamMembers} />;
};

export default TeamTable;