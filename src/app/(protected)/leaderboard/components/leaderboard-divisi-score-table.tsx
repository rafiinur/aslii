import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown, ChevronUp } from "lucide-react";
import { divisi_data } from "../mock/divisi-score";

const LeaderboardDivisiScoreTable = () => {
  return (
    <div className="bg-white shadow-md shadow-neutral-200 p-5 lg:w-1/3 h-full rounded-2xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-sm text-neutral-1000 leading-5">
              No
            </TableHead>
            <TableHead className="text-sm text-neutral-1000 leading-5">
              Divisi
            </TableHead>
            <TableHead className="text-sm text-neutral-1000 text-center">
              Score
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {divisi_data.map((e, i) => (
            <TableRow key={i}>
              <TableCell className="text-sm text-neutral-1000 leading-5">
                {i + 1}
              </TableCell>
              <TableCell className="text-sm text-neutral-1000 leading-5">
                {e.divisi}
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-5">
                  {e.score}
                  {e.performance ? (
                    <ChevronUp
                      fill="oklch(0.5924 0.221 145.01)"
                      className="text-success-300"
                    />
                  ) : (
                    <ChevronDown
                      fill="oklch(0.5363 0.2537 26.94)"
                      className="text-error-300"
                    />
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeaderboardDivisiScoreTable;
