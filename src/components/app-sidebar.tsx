"use client";

import * as React from "react";
import {
  Layers,
  Users,
  GalleryVerticalEnd,
  Megaphone,
  HomeIcon,
  ChartBar,
  FileText,
  Settings,
  BadgeHelp,
  LogOut,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";

import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavSecondary } from "./nav-secondary";
import { Separator } from "./ui/separator";

// This is sample data.
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: HomeIcon,
      isActive: true,
    },
    {
      title: "Manajemen Karyawan",
      url: "/employees",
      icon: Users,
    },
    {
      title: "Proyek",
      url: "/projects",
      icon: Layers,
    },
    {
      title: "Pengumuman",
      url: "/announcements",
      icon: Megaphone,
    },
    {
      title: "Leaderboard",
      url: "/leaderboard",
      icon: ChartBar,
    },
    {
      title: "Dokumen",
      url: "/documents",
      icon: FileText,
    },
  ],
  navSecondary: [
    {
      title: "Pengaturan",
      url: "#",
      icon: Settings,
    },
    {
      title: "Bantuan",
      url: "#",
      icon: BadgeHelp,
    },
    {
      title: "Keluar",
      url: "#",
      icon: LogOut,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="relative shadow-md">
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavSecondary items={data.navSecondary} />
      </SidebarFooter>
    </Sidebar>
  );
}
