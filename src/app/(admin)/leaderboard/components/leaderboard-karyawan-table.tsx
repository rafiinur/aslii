import { Employee } from "@/types/leaderboard";
import { DataTable } from "@/components/data-table";
import { columns } from "./leaderboard-columns";

const employees: Employee[] = [
  {
    id: 1,
    nama: "Vermillion Arisyawal",
    idKaryawan: "16112400",
    divisi: "IT",
    jabatan: "Backend Dev",
    email: "vermillion@asli.com",
  },
  {
    id: 2,
    nama: "Vermillion Arisyawal",
    idKaryawan: "16112400",
    divisi: "Marketing",
    jabatan: "Backend Dev",
    email: "vermillion@asli.com",
  },
  {
    id: 3,
    nama: "Vermillion Arisyawal",
    idKaryawan: "16112400",
    divisi: "Copy Writer",
    jabatan: "Backend Dev",
    email: "vermillion@asli.com",
  },
  {
    id: 4,
    nama: "Vermillion Arisyawal",
    idKaryawan: "16112400",
    divisi: "Business",
    jabatan: "Backend Dev",
    email: "vermillion@asli.com",
  },
  {
    id: 5,
    nama: "Vermillion Arisyawal",
    idKaryawan: "16112400",
    divisi: "HR",
    jabatan: "Backend Dev",
    email: "vermillion@asli.com",
  },
  {
    id: 6,
    nama: "Vermillion Arisyawal",
    idKaryawan: "16112400",
    divisi: "IT",
    jabatan: "Backend Dev",
    email: "vermillion@asli.com",
  },
];

const LeaderboardKaryawanTable = () => {
  return (
    <>
      <DataTable columns={columns} data={employees} />
    </>
  );
};

export default LeaderboardKaryawanTable;
