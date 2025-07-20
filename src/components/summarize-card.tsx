import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SummarizeCardProps = {
  title: string;
  amount: string;
  note?: string;
  className?: string;
  orientation?: "vertical" | "horizontal";
};

const SummarizeCard: React.FC<SummarizeCardProps> = ({
  title,
  amount,
  note = "",
  className,
  orientation = "vertical",
}) => {
  return (
    <Card
      className={cn(
        "shadow-md p-3 md:p-4 lg:p-5",
        "min-h-[90px] flex flex-col justify-center",
        className
      )}
    >
      <CardHeader className="p-0 pb-1">
        <CardTitle className="text-base md:text-lg font-semibold leading-tight truncate">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div
          className={cn(
            "flex w-full",
            orientation === "horizontal"
              ? "flex-row items-end justify-between gap-2"
              : "flex-col items-start gap-2"
          )}
        >
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-none">
            {amount}
          </h4>
          {!!note && (
            <p className="font-medium text-xs md:text-sm text-muted-foreground whitespace-nowrap">
              {note}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SummarizeCard;
