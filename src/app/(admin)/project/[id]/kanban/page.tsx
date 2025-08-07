import KanbanBoard from "@/features/kanban/components/KanbanBoard";
import { Kanban } from "lucide-react";
import React from "react";

const KanbanBoardPage = () => {
  return (
    <div className="flex flex-col flex-1 px-6 py-4 gap-">
      <div className="flex flex-col gap-2 mb-4 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Kanban className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold">Kanban Board / ASLII</h2>
        </div>
        <p className="text-muted-foreground text-sm">
          9 Tugas, update 10 menit lalu.
        </p>
      </div>
      <div className="flex-1 overflow-auto">
        <KanbanBoard />
      </div>
    </div>
  );
};

export default KanbanBoardPage;
