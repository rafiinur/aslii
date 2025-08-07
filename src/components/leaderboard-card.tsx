import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ChevronDown, ChevronUp } from "lucide-react";

const leaderboardData = [
  {
    divisi: "UI/UX",
    skor: 400,
    trend: "up",
  },
  {
    divisi: "Backend",
    skor: 389,
    trend: "down",
  },
  {
    divisi: "Frontend",
    skor: 378,
    trend: "up",
  },
  {
    divisi: "Project Manager",
    skor: 367,
    trend: "up",
  },
  {
    divisi: "Administrator",
    skor: 363,
    trend: "up",
  },
];
const TrendIcon = ({ trend }: { trend: string }) => {
  return (
    <div className="flex justify-center">
      {trend === "up" ? (
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/20">
          <ChevronUp className="w-4 h-4 text-green-600 dark:text-green-400" />
        </div>
      ) : (
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/20">
          <ChevronDown className="w-4 h-4 text-red-600 dark:text-red-400" />
        </div>
      )}
    </div>
  );
};
const LeaderboardCard = () => {
  return (
    <Card className="py-3">
      <CardContent>
        {/* Desktop Table View */}
        <div className="hidden md:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16 font-semibold">Rank</TableHead>
                <TableHead className="font-semibold">Divisi</TableHead>
                <TableHead className="text-right font-semibold">Skor</TableHead>
                <TableHead className="text-center font-semibold w-20">
                  Trend
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((item, index) => (
                <TableRow key={index} className="hover:bg-muted/50 font-medium">
                  <TableCell className="font-sm py-1.5">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-sm">
                      {index + 1}
                    </div>
                  </TableCell>
                  <TableCell className="font-sm py-1.5">
                    {item.divisi}
                  </TableCell>
                  <TableCell className="text-right text-sm py-1.5">
                    {item.skor.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-center py-1.5">
                    <TrendIcon trend={item.trend} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="block md:hidden space-y-3">
          {leaderboardData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{item.divisi}</h4>
                  <p className="text-lg font-bold text-foreground">
                    {item.skor.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                {item.trend === "up" ? (
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/20">
                    <ChevronUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/20">
                    <ChevronDown className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;
