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

const LeaderboardCard = () => {
  return (
    <Card className="py-2">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Divisi</TableHead>
              <TableHead>Skor</TableHead>
              <TableHead className="text-center">Trend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.divisi}</TableCell>
                <TableCell>{item.skor}</TableCell>
                <TableCell align="center">
                  {item.trend == "up" ? (
                    <ChevronUp className="text-success-300" />
                  ) : (
                    <ChevronDown className="text-error-300" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;
