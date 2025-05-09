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
  { date: "2024-07-15", absent: 450, present: 300, total: 750 },
  { date: "2024-07-16", absent: 380, present: 420, total: 750 },
  { date: "2024-07-17", absent: 520, present: 120, total: 750 },
  { date: "2024-07-18", absent: 140, present: 550, total: 750 },
  { date: "2024-07-19", absent: 600, present: 350, total: 750 },
];

const chartConfig = {
  absent: {
    label: "Absent",
    color: "var(--chart-1)",
  },
  present: {
    label: "Present",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function AttendanceChart() {
  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <YAxis
              dataKey="total"
              tickMargin={10}
              tickLine={false}
              axisLine={false}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("id-ID", {
                  weekday: "short",
                });
              }}
            />
            <Bar
              dataKey="absent"
              stackId="a"
              fill="var(--color-absent)"
              radius={[0, 0, 18, 18]}
            />
            <Bar
              dataKey="present"
              stackId="a"
              fill="var(--color-present)"
              radius={[18, 18, 0, 0]}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
