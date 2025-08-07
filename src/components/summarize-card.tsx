import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";

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
    <Card className={cn("px-6", className)}>
      <CardHeader className="p-0">
        <CardTitle className="flex items-center gap-2 text-sm font-semibold truncate">
          {title}
          <User className="size-4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div
          className={cn(
            "flex w-full",
            orientation === "horizontal"
              ? "flex-row items-end justify-between gap-4"
              : "flex-col justify-between gap-6"
          )}
        >
          <h4 className="text-5xl font-semibold leading-none">{amount}</h4>
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
