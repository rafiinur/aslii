import { Button } from "./ui/button";
import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";

interface SortingButtonProps {
  column: {
    toggleSorting: (isSorted: boolean) => void;
    getIsSorted: () => "asc" | "desc" | false;
  };
  label: string;
}

export const SortingButton: React.FC<SortingButtonProps> = ({
  column,
  label,
}) => (
  <Button
    className="cursor-pointer"
    variant="ghost"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  >
    {label}
    {column.getIsSorted() === "asc" ? (
      <ArrowUp className="ml-2 h-4 w-4" />
    ) : column.getIsSorted() === "desc" ? (
      <ArrowDown className="ml-2 h-4 w-4" />
    ) : (
      <ArrowUpDown className="ml-2 h-4 w-4" />
    )}
  </Button>
);
