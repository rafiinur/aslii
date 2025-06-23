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

const LeaderboardKaryawanTable = () => {
  return (
    <div className="bg-white shadow-md shadow-neutral-200 rounded-2xl px-4 py-2">
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
                <LeaderboardDivisiBadge divisi={e.divisi}/>
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
    </div>
  );
};

export default LeaderboardKaryawanTable;
