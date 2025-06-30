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
  Workflow,
  Building2,
  KeyRound,
  Box,
  UserLock,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";

import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { Separator } from "./ui/separator";
import { ThemeToggle } from "./theme-toggle";
import { useProfileStore } from "@/stores/use-profile-store";

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
    {
      title: "Approval",
      url: "/approval",
      icon: Workflow,
    },
  ],
  navSuper: [
    {
      title: "Dashboard",
      url: "/super-dashboard",
      icon: HomeIcon,
      isActive: true,
    },
    {
      title: "Company",
      url: "/company",
      icon: Building2,
    },
    {
      title: "Module",
      url: "/module",
      icon: Box,
    },
    {
      title: "Permission",
      url: "/permission",
      icon: KeyRound,
    },
    {
      title: "Role",
      url: "/role",
      icon: UserLock,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { profile } = useProfileStore();

  console.log("AppSidebar profile:", profile);

  return (
    <Sidebar collapsible="icon" {...props} className="relative shadow-md">
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <NavMain
          items={
            profile?.m_user_profile_is_super ? data.navSuper : data.navMain
          }
        />
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
