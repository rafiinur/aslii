"use client";

import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  DragOverlay,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import type { KanbanColumn, KanbanItem } from "@/types/kanban";
import { CardItem } from "@/features/kanban/components/card-item";

interface DndBoardContextType {
  columns: KanbanColumn[];
  setColumns: React.Dispatch<React.SetStateAction<KanbanColumn[]>>;
}

const DndBoardContext = createContext<DndBoardContextType | undefined>(
  undefined
);

export const useDndBoard = () => {
  const context = useContext(DndBoardContext);
  if (!context) {
    throw new Error("useDndBoard must be used within a DndBoardProvider");
  }
  return context;
};

export default function DndBoardProvider({
  children,
  data,
}: {
  children: ReactNode;
  data: KanbanColumn[];
}) {
  const [columns, setColumns] = useState<KanbanColumn[]>(data);
  const [activeItem, setActiveItem] = useState<KanbanItem | null>(null);

  useEffect(() => {
    setColumns(data);
  }, [data]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  const findColumn = (uniqueId: string | number) => {
    if (columns.some((col) => col.id === uniqueId)) {
      return columns.find((col) => col.id === uniqueId);
    }
    return columns.find((col) =>
      col.items.some((item) => item.id === uniqueId)
    );
  };

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const item = columns
      .flatMap((col) => col.items)
      .find((i) => i.id === active.id);
    if (item) {
      setActiveItem(item);
    }
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id || !activeItem) return;

    const activeColumn = findColumn(active.id);
    const overColumn = findColumn(over.id);

    if (!activeColumn || !overColumn || activeColumn.id === overColumn.id) {
      return;
    }

    setColumns((prev) => {
      const activeItems = activeColumn.items;
      const overItems = overColumn.items;
      const overIndex =
        over.data.current?.type === "Column"
          ? overItems.length
          : overItems.findIndex((i) => i.id === over.id);

      const newColumns = prev.map((col) => {
        if (col.id === activeColumn.id) {
          return {
            ...col,
            items: col.items.filter((item) => item.id !== active.id),
          };
        } else if (col.id === overColumn.id) {
          const newItems = [...col.items];
          newItems.splice(overIndex, 0, activeItem);
          return { ...col, items: newItems };
        }
        return col;
      });
      return newColumns;
    });
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) {
      setActiveItem(null);
      return;
    }

    const activeColumn = findColumn(active.id);
    const overColumn = findColumn(over.id);

    if (!activeColumn || !overColumn) {
      setActiveItem(null);
      return;
    }

    if (activeColumn.id !== overColumn.id) {
      setActiveItem(null);
      return;
    }

    const activeIndex = activeColumn.items.findIndex((i) => i.id === active.id);
    const overIndex = activeColumn.items.findIndex((i) => i.id === over.id);

    if (activeIndex !== overIndex) {
      setColumns((prev) =>
        prev.map((col) => {
          if (col.id === activeColumn.id) {
            return {
              ...col,
              items: arrayMove(col.items, activeIndex, overIndex),
            };
          }
          return col;
        })
      );
    }

    setActiveItem(null);
  }

  return (
    <DndBoardContext.Provider value={{ columns, setColumns }}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {children}
        <DragOverlay>
          {activeItem ? <CardItem item={activeItem} /> : null}
        </DragOverlay>
      </DndContext>
    </DndBoardContext.Provider>
  );
}
