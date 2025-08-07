import React from "react";
import { divisi_data } from "../mock/divisi-score";
import { Card } from "@/components/ui/card";

const LeaderboardGraphics = () => {
  const getWidthClass = (rank: number) => {
    if (rank === 1) return "h-3/4";
    if (rank === 2) return "h-2/4";
    return "h-1/3";
  };

  return (
    <Card className="flex-row shadow-md lg:w-2/3 rounded-2xl flex items-end gap-5 p-4 pb-0 border h-72 lg:h-full">
      {divisi_data.slice(0, 3).map((e, i) => (
        <div
          className={`bg-gradient-to-t from-white to-primary-300 p-4 w-1/3 relative ${getWidthClass(
            i + 1
          )} ${i === 1 ? "order-first" : ""}`}
          key={i}
          id="bar-chart"
        >
          <div className="flex flex-col items-center absolute left-5 right-5 -top-12 gap-2">
            <h4 className="text-center text-xs lg:text-lg font-bold md:leading-8">
              Divisi {e.divisi}
            </h4>
            <div className="bg-primary-200 p-2 w-full">
              <h3 className="text-center font-bold text-primary-300">
                {i + 1}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default LeaderboardGraphics;
