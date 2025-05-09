"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  {
    status: "Leave Applications",
    disetujui: 120,
    ditolak: 40,
    diajukan: 26,
  },
];

const chartConfig = {
  disetujui: {
    label: "Disetujui",
    color: "var(--chart-1)",
  },
  ditolak: {
    label: "Ditolak",
    color: "var(--chart-2)",
  },
  diajukan: {
    label: "Diajukan",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export default function LeaveApplicationChart() {
  return (
    <Card className="w-full h-full">
      <CardContent className="h-full">
        <ChartContainer config={chartConfig} className="h-10 w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            barGap={0}
            barSize={25}
          >
            <XAxis
              type="number"
              hide={true}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              dataKey="status"
              type="category"
              hide={true}
              axisLine={false}
              tickLine={false}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar
              dataKey="disetujui"
              fill="var(--chart-1)"
              stackId="a"
              radius={[12, 0, 0, 12]}
            />
            <Bar
              dataKey="ditolak"
              fill="var(--chart-2)"
              stackId="a"
              radius={0}
            />
            <Bar
              dataKey="diajukan"
              fill="var(--chart-3)"
              stackId="a"
              radius={[0, 12, 12, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap items-center w-full border py-2">
          <div className="flex flex-col flex-1 gap-1 sm:gap-3 border-r px-2 sm:px-4 min-w-[80px]">
            <div className="font-secondary text-xs">Disetujui</div>
            <div className="font-secondary text-lg sm:text-2xl font-semibold">
              20
            </div>
            <span className="font-secondary text-xs">33%</span>
          </div>
          <div className="flex flex-col flex-1 gap-1 sm:gap-3 border-r px-2 sm:px-4 min-w-[80px]">
            <div className="font-secondary text-xs">Disetujui</div>
            <div className="font-secondary text-lg sm:text-2xl font-semibold">
              20
            </div>
            <span className="font-secondary text-xs">33%</span>
          </div>
          <div className="flex flex-col flex-1 gap-1 sm:gap-3 px-2 sm:px-4 min-w-[80px]">
            <div className="font-secondary text-xs">Disetujui</div>
            <div className="font-secondary text-2xl font-semibold">20</div>
            <span className="font-secondary text-xs">33%</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
