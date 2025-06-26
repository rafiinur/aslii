import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { karyawan_data } from "../mock/karyawan";
import { Ellipsis } from "lucide-react";
import LeaderboardDivisiBadge from "./leaderboard-divisi-badge";
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
      {/* <div className="bg-white shadow-md shadow-neutral-200 rounded-2xl px-4 py-2">
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead className="text-sm text-neutral-1000 leading-5">
                No
              </TableHead>
              <TableHead className="text-sm text-neutral-1000 leading-5">
                Nama
              </TableHead>
              <TableHead className="text-sm text-neutral-1000 leading-5">
                Id Karyawan
              </TableHead>
              <TableHead className="text-sm text-neutral-1000 leading-5">
                Divisi
              </TableHead>
              <TableHead className="text-sm text-neutral-1000 leading-5">
                Jabatan
              </TableHead>
              <TableHead className="text-sm text-neutral-1000 leading-5">
                Email
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {karyawan_data.map((e, i) => (
              <TableRow key={i}>
                <TableCell className="text-sm text-neutral-1000 leading-5">
                  {i + 1}
                </TableCell>
                <TableCell className="text-sm text-neutral-1000 leading-5">
                  {e.nama}
                </TableCell>
                <TableCell className="text-sm text-neutral-1000 leading-5">
                  {e.id_karyawan}
                </TableCell>
                <TableCell className="text-sm text-neutral-1000 leading-5">
                  <LeaderboardDivisiBadge divisi={e.divisi} />
                </TableCell>
                <TableCell className="text-sm text-neutral-1000 leading-5">
                  {e.jabatan}
                </TableCell>
                <TableCell className="text-sm text-neutral-1000 leading-5">
                  {e.email}
                </TableCell>
                <TableCell className="text-sm text-neutral-1000 leading-5">
                  <Ellipsis />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div> */}
      <DataTable columns={columns} data={employees} />
    </>
  );
};

export default LeaderboardKaryawanTable;
