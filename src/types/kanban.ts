export type KanbanColumn = {
  id: string;
  title: string;
  items: KanbanItem[];
};

export type KanbanItem = {
  id: string;
  content: string;
  parentTask?: string; // Name of parent task if this is a child task
};
