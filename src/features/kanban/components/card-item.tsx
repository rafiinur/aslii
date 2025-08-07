import { KanbanItem } from "@/types/kanban";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, AlertCircle, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function CardItem({ item }: { item: KanbanItem }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging, // Tambahan state untuk styling
  } = useSortable({
    id: item.id,
    data: {
      type: "Item", // Memberi data tambahan itu praktik yang baik
      item,
    },
  });

  const style = {
    transition,
    // Helper `CSS.Transform.toString` lebih aman dan direkomendasikan
    transform: CSS.Transform.toString(transform),
    // Sembunyikan kartu asli saat di-drag, karena DragOverlay yang akan menampilkannya
    opacity: isDragging ? 0 : 1,
  };

  // Mock user data - in real app, this would come from props or API
  const users = [
    {
      id: 1,
      name: "John Doe",
      role: "Frontend Developer",
      avatar: "https://github.com/shadcn.png",
      initials: "JD",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UI/UX Designer",
      avatar: "https://github.com/leerob.png",
      initials: "JS",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Backend Developer",
      avatar: "https://github.com/evilrabbit.png",
      initials: "MJ",
    },
  ];

  return (
    <TooltipProvider>
      <Card
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="cursor-grab hover:shadow-md border-l-4 border-l-orange-500 py-0 touch-none"
      >
        <CardHeader className="px-4 pt-3 gap-1 pb-0">
          <div className="flex items-start justify-between mb-2">
            <Badge
              variant="destructive"
              className="text-xs px-2 py-0.5 bg-red-100 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800"
            >
              <AlertCircle className="size-3 mr-1" />
              Urgent
            </Badge>
            <div className="flex -space-x-1.5">
              {users.map((user) => (
                <Tooltip key={user.id}>
                  <TooltipTrigger asChild>
                    <Avatar className="size-6 border-2 border-white dark:border-gray-800 shadow-sm hover:scale-110 transition-transform cursor-pointer">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="text-xs bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 dark:from-blue-900 dark:to-blue-800 dark:text-blue-300">
                        {user.initials}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="bg-white dark:bg-gray-800 border shadow-lg"
                  >
                    <div className="p-2">
                      <p className="font-medium text-sm">{user.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {user.role}
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
          {item.parentTask && (
            <div className="mb-1">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                {item.parentTask}
              </span>
            </div>
          )}
          <CardTitle className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1 leading-tight">
            {item.content}
          </CardTitle>
          <CardDescription className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
            Melakukan analisis kebutuhan user untuk pengembangan fitur baru
            dalam sistem manajemen proyek.
          </CardDescription>
        </CardHeader>
        <CardFooter className="pt-0 px-4 pb-3">
          <div className="w-full flex items-center justify-between text-xs">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                <Calendar className="size-3" />
                <span className="font-medium">Tomorrow</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-400">
                <Users className="size-3" />
                <span>{users.length}</span>
              </div>
            </div>
            <Badge
              variant="secondary"
              className="text-xs px-1.5 py-0.5 bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800"
            >
              High
            </Badge>
          </div>
        </CardFooter>
      </Card>
    </TooltipProvider>
  );
}
