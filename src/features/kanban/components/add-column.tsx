import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export function AddColumn() {
  const handleAddColumn = () => {
    // TODO: Implement add column functionality
    console.log("Add new column");
  };

  return (
    <Button
      variant="outline"
      className="min-w-56 flex-1 flex items-center justify-center p-5"
      onClick={handleAddColumn}
    >
      <PlusCircle className="mr-2" />
      Add Column
    </Button>
  );
}
