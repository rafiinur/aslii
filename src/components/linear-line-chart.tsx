"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A linear line chart";

const chartData = [
  { day: "Senin", count: 186 },
  { day: "Selasa", count: 305 },
  { day: "Rabu", count: 237 },
  { day: "Kamis", count: 73 },
  { day: "Jum'at", count: 209 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function LinearLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Grafik Login Harian</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-72 w-full">
          <LineChart accessibilityLayer data={chartData}>
            <CartesianGrid />
            <XAxis
              dataKey="day"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="count"
              type="linear"
              stroke="var(--color-primary)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
