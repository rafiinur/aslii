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
import { useProfileStore } from "@/stores/use-profile-store";
import { SidebarSkeleton } from "./sidebar-skeleton";

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
      url: "/document",
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
    {
      title: "Asset",
      url: "/asset",
      icon: FileText,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const { profile } = useProfileStore();

  if (!hasMounted) {
    return <SidebarSkeleton {...props} />;
  }

  const isSuperAdmin = profile?.m_user_profile_is_super;
  const navItems = isSuperAdmin ? data.navSuper : data.navAdmin;

  return (
    <Sidebar collapsible="icon" {...props} className="relative shadow-md">
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
