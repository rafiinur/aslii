"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="py-4">
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            barSize={14}
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
    </Card>
  );
}
