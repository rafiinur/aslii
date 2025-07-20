import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import SearchInput from "./search-input";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";
import { NavUser } from "./nav-user";

const TopBar = () => {
  return (
    <header className="flex h-12 shrink-0 items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 py-8">
      <div className="flex items-center justify-between px-6 w-full">
        {/* Left section - Navigation */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <SidebarTrigger className="-ml-1" />
        </div>

        {/* Center section - Search */}
        <div className="flex items-center justify-center flex-1 max-w-md">
          <SearchInput />
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

          <NavUser />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
