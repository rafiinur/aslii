"use client";

import { useEffect, useState } from "react";
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
  UserLock,
  BriefcaseBusiness,
  BookOpen,
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
import { SidebarSkeleton } from "./sidebar-skeleton";
import { NavUser } from "./nav-user";
import { useAuthStore } from "@/stores/use-auth-store";

// This is sample data.
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navAdmin: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: HomeIcon,
    },
    {
      title: "Manajemen Karyawan",
      url: "/employee",
      icon: Users,
    },
    {
      title: "Proyek",
      url: "/project",
      icon: Layers,
    },
    {
      title: "Pengumuman",
      url: "/announcement",
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
      title: "Pengajuan",
      icon: Workflow,
      items: [
        {
          title: "Cuti",
          url: "/approval/leave",
        },
        {
          title: "Lembur",
          url: "/approval/overtime",
        },
        {
          title: "Template",
          url: "/approval/template",
        },
      ],
    },
    {
      title: "Asset",
      url: "/asset",
      icon: FileText,
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
      title: "Divisi",
      url: "/division",
      icon: BriefcaseBusiness,
    },
    {
      title: "Module",
      url: "/module",
      icon: BookOpen,
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
  const { userProfile: profile, isLoggedIn } = useAuthStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isSuperAdmin = profile?.m_user_profile_is_super;
  const navItems = isSuperAdmin ? data.navSuper : data.navAdmin;

  return (
    <Sidebar
      collapsible="icon"
      {...props}
      variant="inset"
      className="overflow-hidden"
    >
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        {!isClient || !isLoggedIn ? (
          <SidebarSkeleton />
        ) : (
          <NavMain items={navItems} />
        )}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
