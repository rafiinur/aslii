import { AnnouncementCarousel } from "@/components/announcement-carousel";
import { AttendanceChart } from "@/components/attendance-chart";
import LeaderboardCard from "@/components/leaderboard-card";
import SummarizeCard from "@/components/summarize-card";
import { createClient } from "@/lib/supabase/server";

import Link from "next/link";

const dashboardSums = [
  {
    title: "Total Karyawan",
    amount: "50",
    note: "+5 karyawan bulan ini",
  },
  {
    title: "Cuti Hari ini",
    amount: "7",
    note: "1 sakit, 1 izin, 5 cuti tahunan",
  },
  {
    title: "Proyek Aktif",
    amount: "21",
    note: "7 mendekati target",
  },
  {
    title: "Pengajuan Cuti",
    amount: "4",
    note: "menunggu persetujuan",
  },
];

export default async function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 py-4">
      <div className="grid auto-rows-min grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-3 flex flex-col">
          <div className="flex items-center justify-between mb-2.5">
            <h4 className="text-lg font-semibold">Tinjauan Kehadiran Harian</h4>
            <span className="text-sm text-muted-foreground">
              10 - 14 Maret 2025
            </span>
          </div>
          <div className="flex-1">
            <AttendanceChart />
          </div>
        </div>
        <div className="md:col-span-2 flex flex-col">
          <h4 className="text-lg font-semibold mb-2.5">Kegiatan Terbaru</h4>
          <div className="grid gap-4 grid-cols-2 flex-1">
            {dashboardSums.map((sum) => (
              <SummarizeCard key={sum.title} {...sum} orientation="vertical" />
            ))}
          </div>
        </div>
      </div>
      <div className="grid auto-rows-min grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col h-full">
          <h4 className="text-lg font-semibold mb-2.5">
            Divisi dengan Performa Terbaik Bulan -{" "}
            <span className="text-primary">Mei</span>
          </h4>
          <div className="flex-1">
            <LeaderboardCard />
          </div>
        </div>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-2.5">
            <h4 className="text-lg font-semibold">Pengumuman Terbaru</h4>
            <Link href={"#"} className="font-medium text-muted-foreground">
              Lihat Selengkapnya
            </Link>
          </div>
          <div className="flex-1">
            <AnnouncementCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}
