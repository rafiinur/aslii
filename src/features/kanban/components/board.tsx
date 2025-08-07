"use client";

import { KanbanColumn } from "@/types/kanban";
import { Column } from "./columns";
import { AddColumn } from "./add-column";
import DndBoardProvider, { useDndBoard } from "@/lib/dnd-context";

function BoardContent() {
  const { columns } = useDndBoard();

  return (
    <div className="flex gap-3 overflow-x-auto scrollbar-thin py-4 pr-4">
      {columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
      <AddColumn />
    </div>
  );
}

export function Board() {
  const initialColumns: KanbanColumn[] = [
    {
      id: "todo",
      title: "To Do",
      items: [
        { id: "1", content: "Buat landing page" },
        {
          id: "2",
          content: "Fix bug navbar",
          parentTask: "Website Development",
        },
        {
          id: "6",
          content: "Design wireframe",
          parentTask: "Website Development",
        },
      ],
    },
    {
      id: "inprogress",
      title: "In Progress",
      items: [
        { id: "3", content: "Integrasi API" },
        {
          id: "7",
          content: "Implement authentication",
          parentTask: "User Management System",
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      items: [
        { id: "4", content: "Setup project" },
        {
          id: "8",
          content: "Database schema design",
          parentTask: "Backend Infrastructure",
        },
      ],
    },
    {
      id: "pending",
      title: "Pending",
      items: [
        { id: "5", content: "Setup project" },
        { id: "9", content: "User testing", parentTask: "Quality Assurance" },
      ],
    },
  ];

  return (
    <DndBoardProvider data={initialColumns}>
      <BoardContent />
    </DndBoardProvider>
  );
}
