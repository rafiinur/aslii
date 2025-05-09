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
    <Card className={cn("shadow-md", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            "flex",
            orientation === "horizontal"
              ? "flex-row items-end justify-between"
              : "flex-col items-start gap-6"
          )}
        >
          <h4 className="text-5xl font-semibold">{amount}</h4>
          <p className="font-medium text-xs text-muted-foreground">{note}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SummarizeCard;
