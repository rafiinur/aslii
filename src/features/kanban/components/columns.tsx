import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { KanbanColumn } from "@/types/kanban";
import { CardItem } from "./card-item";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SortableContext, // 👈 Import SortableContext
  verticalListSortingStrategy, // 👈 Import strategi sorting
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

export function Column({ column }: { column: KanbanColumn }) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  const handleAddTask = () => {
    // TODO: Implement add task functionality
    console.log("Add task to column:", column.id);
  };

  const handleEditColumn = () => {
    // TODO: Implement edit column functionality
    console.log("Edit column:", column.id);
  };

  const handleDeleteColumn = () => {
    // TODO: Implement delete column functionality
    console.log("Delete column:", column.id);
  };

  return (
    <Card
      ref={setNodeRef}
      className="max-h-[30rem] h-[30rem] w-80 min-w-80 pt-2"
    >
      <CardHeader className="py-0 px-2.5 h-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              {column.title}
            </h3>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs px-2 py-0.5 rounded-full">
              {column.items.length}
            </span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <MoreHorizontal className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem onClick={handleEditColumn}>
                Edit Column
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleDeleteColumn}
                className="text-red-600 dark:text-red-400"
              >
                Delete Column
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="px-2 space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
        <SortableContext
          items={column.items.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {column.items.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </SortableContext>
      </CardContent>
      <CardFooter className="py-0 px-2 h-1">
        {/* Add Task Button */}
        <Button
          onClick={handleAddTask}
          variant="ghost"
          className="w-full border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-200"
        >
          <PlusCircle className="size-4 mr-2" />
          Add Task
        </Button>
      </CardFooter>
    </Card>
  );
}
