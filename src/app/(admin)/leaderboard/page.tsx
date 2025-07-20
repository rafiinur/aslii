import LeaderboardDivisiScoreTable from "./components/leaderboard-divisi-score-table";
import LeaderboardGraphics from "./components/leaderboard-graphics";
import { ChevronDown } from "lucide-react";
import { divisi_data } from "./mock/divisi-score";
import LeaderboardKaryawanTable from "./components/leaderboard-karyawan-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const page = () => {
  return (
    <div className="flex flex-col gap-5 pb-10">
      <h4 className="font-semibold text-lg">Leaderboard Divisi</h4>

      <section className="flex flex-col lg:flex-row gap-8 h-max lg:h-72">
        <LeaderboardGraphics />
        <LeaderboardDivisiScoreTable />
      </section>

      <section className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-lg">Leaderboard Anggota Divisi</h4>
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-primary-300 py-1.5 px-2.5 text-sm text-primary-100 rounded-sm flex gap-8 font-semibold">
              Pilih Divisi
              <ChevronDown className="text-primary-100" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary-100 text-neutral-1000">
              {divisi_data.map((e, i) => (
                <DropdownMenuItem key={i} className="px-5 py-2">
                  {e.divisi}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <LeaderboardKaryawanTable />
      </section>
    </div>
  );
};

export default page;
