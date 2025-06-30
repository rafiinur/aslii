import { AppSidebar } from "@/components/app-sidebar";
import { NavUser } from "@/components/nav-user";
import { Button } from "@/components/ui/button";
import SearchInput from "@/components/search-input";
import { Separator } from "@/components/ui/separator";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Bell } from "lucide-react";

export default function SuperLayout({ children }: React.PropsWithChildren) {
  return (
    <SidebarProvider className="h-screen">
      <AppSidebar />
      <SidebarInset className="flex flex-col h-full">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center justify-between px-8 w-full">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mx-1 data-[orientation=vertical]:h-4"
              />
              <span className="font-bold text-2xl text-primary">
                Selamat Datang John
              </span>
            </div>

            <div className="flex items-center gap-3">
              <SearchInput />
              <Button
                variant={"ghost"}
                size={"icon"}
                className="rounded-full shadow-sm cursor-pointer relative"
              >
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                <Bell />
              </Button>

              <NavUser />
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto px-8 py-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
