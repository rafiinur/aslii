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
  HelpCircle,
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
import { NavSecondary } from "./nav-secondary";

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
    {
      title: "Modul",
      url: "/module-company",
      icon: BookOpen,
    },
    {
      title: "Role",
      url: "/role-company",
      icon: UserLock,
    },
    {
      title: "Divisi",
      url: "/divisi",
      icon: BriefcaseBusiness,
    },
    {
      title: "Kehadiran",
      url: "/attendance",
      icon: Layers,
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
  navSecondary: [
    {
      title: "Bantuan",
      url: "/bantuan",
      icon: HelpCircle,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // 1. State ini adalah satu-satunya "sumber kebenaran" kita untuk membedakan server dan klien.
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 2. Kita tetap mengambil data dari store seperti biasa.
  const { userProfile: profile, isLoggedIn } = useAuthStore();

  // 3. Logika untuk memilih menu tetap sama.
  const navItems = profile?.m_user_profile_is_super
    ? data.navSuper
    : data.navAdmin;

  return (
    <Sidebar collapsible="icon" {...props} variant="inset">
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <Separator />
      <SidebarContent className="scrollbar-thin">
        {/*
          4. INI BAGIAN KUNCI:
          Gunakan HANYA `isClient` untuk guard render awal.
        */}
        {!isClient ? (
          // Jika belum di client (di server ATAU render pertama di client),
          // SELALU tampilkan skeleton. Ini menjamin kecocokan 100%.
          <SidebarSkeleton />
        ) : // Jika sudah di client, SEKARANG kita baru aman untuk memeriksa state login.
        isLoggedIn ? (
          <>
            <NavMain items={navItems} />
            <NavSecondary items={data.navSecondary} className="mt-auto" />
          </>
        ) : (
          // Jika di client tapi tidak login, tampilkan skeleton (atau menu publik jika ada).
          <SidebarSkeleton />
        )}
      </SidebarContent>
      <SidebarFooter>
        {/*
          5. Juga amankan komponen NavUser.
          Render NavUser HANYA jika sudah di client.
        */}
        {isClient ? <NavUser /> : null}
      </SidebarFooter>
    </Sidebar>
  );
}
