import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  User,
  Calendar,
} from "lucide-react";
import React from "react";

// Sample data untuk kanban
const sampleTasks = [
  {
    id: 1,
    title: "Setup project structure",
    description: "Initialize the project with proper folder structure",
    status: "todo",
    priority: "high" as const,
  },
  {
    id: 2,
    title: "Design UI mockups",
    description: "Create wireframes and UI designs",
    status: "todo",
    priority: "medium" as const,
  },
  {
    id: 3,
    title: "Implement authentication",
    description: "Add login and registration functionality",
    status: "in-progress",
    priority: "high" as const,
  },
  {
    id: 4,
    title: "Database setup",
    description: "Configure database connections",
    status: "in-progress",
    priority: "medium" as const,
  },
  {
    id: 5,
    title: "API documentation",
    description: "Document all API endpoints",
    status: "review",
    priority: "low" as const,
  },
  {
    id: 6,
    title: "Testing implementation",
    description: "Write unit and integration tests",
    status: "testing",
    priority: "high" as const,
  },
  {
    id: 7,
    title: "Performance optimization",
    description: "Optimize app performance and loading times",
    status: "testing",
    priority: "medium" as const,
  },
  {
    id: 8,
    title: "Production deployment",
    description: "Deploy application to production environment",
    status: "deploy",
    priority: "high" as const,
  },
  {
    id: 9,
    title: "Initial setup",
    description: "Project initialization and basic configuration",
    status: "done",
    priority: "high" as const,
  },
];

const columns = [
  { id: "todo", title: "To Do", color: "bg-slate-100" },
  { id: "in-progress", title: "In Progress", color: "bg-blue-100" },
  { id: "review", title: "Review", color: "bg-yellow-100" },
  { id: "testing", title: "Testing", color: "bg-purple-100" },
  { id: "deploy", title: "Deploy", color: "bg-orange-100" },
  { id: "done", title: "Done", color: "bg-green-100" },
];

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: "low" | "medium" | "high";
}

interface TaskCardProps {
  task: Task;
}

function TaskCard({ task }: TaskCardProps) {
  const priorityColors = {
    low: "bg-gray-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
  };

  return (
    <Card className="mb-3 cursor-pointer hover:shadow-md transition-all duration-200 group relative">
      <CardContent className="p-3">
        {/* Header with title and more button */}
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-medium text-sm pr-2 group-hover:pr-0 transition-all duration-200">
            {task.title}
          </h4>

          {/* More button that appears on hover */}
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-200">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 hover:bg-gray-100"
                  title="More options"
                >
                  <MoreHorizontal className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="cursor-pointer">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit task
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  Assign user
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Calendar className="mr-2 h-4 w-4" />
                  Set due date
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-red-600 hover:text-red-700">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete task
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">
          {task.description}
        </p>

        {/* Bottom section with priority and additional info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-1 rounded-full text-xs text-white ${
                priorityColors[task.priority]
              }`}
            >
              {task.priority}
            </span>
          </div>

          {/* Task ID - only visible on hover */}
          <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            #{task.id}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

interface ColumnProps {
  column: (typeof columns)[0];
  tasks: Task[];
}

function Column({ column, tasks }: ColumnProps) {
  return (
    <Card className="min-w-80 w-80 h-full rounded-sm shadow-none flex-shrink-0">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${column.color}`}></div>
            <CardTitle className="text-sm font-medium">
              {column.title}
            </CardTitle>
            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
              {tasks.length}
            </span>
          </div>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </CardContent>
    </Card>
  );
}

function KanbanBoard() {
  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex items-center justify-between gap-2">
        <Input placeholder="Search tasks..." className="max-w-xs h-8" />
      </div>
      <div className="flex flex-row gap-4 flex-1 overflow-x-auto overflow-y-hidden p-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {columns.map((column) => {
          const columnTasks = sampleTasks.filter(
            (task) => task.status === column.id
          );
          return <Column key={column.id} column={column} tasks={columnTasks} />;
        })}
      </div>
    </div>
  );
}

const ProjectDetailPage = () => {
  return (
    <div className="h-[calc(100vh-8rem)] w-[calc(100vw-6rem)]">
      <h2 className="text-xl font-semibold mb-2">Board</h2>
      <KanbanBoard />
    </div>
  );
};

export default ProjectDetailPage;
