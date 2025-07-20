"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuSkeleton,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export function SidebarSkeleton({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="relative shadow-md">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1">
          <Skeleton className="h-8 w-8 shrink-0 rounded-md" />
          <Skeleton className="h-5 w-24" />
        </div>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <div className="mt-4 flex flex-col gap-2 px-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <SidebarMenuSkeleton key={i} showIcon={true} />
          ))}
        </div>
      </SidebarContent>
      <SidebarFooter>
        <Skeleton className="h-8 w-8 rounded-md" />
      </SidebarFooter>
    </Sidebar>
  );
}
