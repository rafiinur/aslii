import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";
import { Separator } from "./ui/separator";
import NavBreadcrumbs from "./nav-breadcrumbs";

const TopBar = () => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center justify-between px-6 w-full gap-2">
        {/* Left section - Navigation */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <SidebarTrigger />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <NavBreadcrumbs />
        </div>

        {/* Right section - Actions */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            className="relative h-8 w-8 rounded-full hover:bg-accent"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-destructive rounded-full border border-background"></span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
