import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Board } from "./board";
import { LayoutGrid, List } from "lucide-react";

const KanbanBoard = () => {
  return (
    <Tabs defaultValue="board">
      <TabsList className="grid w-fit grid-cols-2 bg-transparent p-0 h-auto">
        <TabsTrigger value="board" className="cursor-pointer">
          <LayoutGrid className="size-4" />
          <span>Board</span>
        </TabsTrigger>
        <TabsTrigger value="list" className="cursor-pointer">
          <List className="size-4" />
          <span>List</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="board">
        <Board />
      </TabsContent>
      <TabsContent value="list">
        <Card>
          <CardHeader>
            <CardTitle>Task List View</CardTitle>
            <CardDescription>
              View all tasks in a simplified list format.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              List view coming soon...
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default KanbanBoard;
