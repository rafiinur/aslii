import { LinearLineChart } from "@/components/linear-line-chart";
import SummarizeCard from "@/components/summarize-card";

const DUMMY_DATA = [
  {
    title: "Total Perusahaan",
    amount: "50",
  },
  {
    title: "Total User",
    amount: "41",
  },
  {
    title: "Modul Aktif",
    amount: "2",
  },
];

export default function SuperDashboardPage() {
  return (
    <div className="flex flex-col gap-6 py-4 px-6">
      <div className="grid auto-rows-min grid-cols-1 md:grid-cols-3 gap-6 min-h-0 flex-1">
        {DUMMY_DATA.map((data) => (
          <SummarizeCard key={data.title} {...data} orientation="vertical" />
        ))}
      </div>
      <LinearLineChart />
    </div>
  );
}
