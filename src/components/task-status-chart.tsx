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
    status: "Task Status",
    tertunda: 120,
    berjalan: 40,
    selesai: 26,
  },
];

const chartConfig = {
  tertunda: {
    label: "Tertunda",
    color: "var(--chart-1)",
  },
  berjalan: {
    label: "Berjalan",
    color: "var(--chart-2)",
  },
  selesai: {
    label: "Selesai",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export default function TaskStatusChart() {
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
              dataKey="tertunda"
              fill="var(--chart-1)"
              stackId="a"
              radius={[12, 0, 0, 12]}
            />
            <Bar
              dataKey="berjalan"
              fill="var(--chart-2)"
              stackId="a"
              radius={0}
            />
            <Bar
              dataKey="selesai"
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
            <div className="font-secondary text-xs">Tertunda</div>
            <div className="font-secondary text-lg sm:text-2xl font-semibold">
              2
            </div>
            <span className="font-secondary text-xs">33%</span>
          </div>
          <div className="flex flex-col flex-1 gap-1 sm:gap-3 border-r px-2 sm:px-4 min-w-[80px]">
            <div className="font-secondary text-xs">Berjalan</div>
            <div className="font-secondary text-lg sm:text-2xl font-semibold">
              20
            </div>
            <span className="font-secondary text-xs">33%</span>
          </div>
          <div className="flex flex-col flex-1 gap-1 sm:gap-3 px-2 sm:px-4 min-w-[80px]">
            <div className="font-secondary text-xs">Selesai</div>
            <div className="font-secondary text-2xl font-semibold">20</div>
            <span className="font-secondary text-xs">33%</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
