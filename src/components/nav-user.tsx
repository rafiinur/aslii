"use client";

import { Bell, ChevronsUpDown, LogOut, UserCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/use-auth-store";
import { logout } from "@/features/auth/actions/auth.action";
import { Badge } from "./ui/badge";
import Link from "next/link";

// 2. Hapus `profile` dari props, komponen ini tidak lagi menerimanya
export function NavUser() {
  const { isMobile } = useSidebar();
  const router = useRouter();

  const { userProfile, roles, logout: logoutAction } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logout();
      logoutAction();
      router.push("/login");
    } catch (error) {
      console.error("Gagal logout:", error);
    }
  };

  if (!userProfile) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={userProfile.m_user_profile_picture || ""}
                  alt={userProfile.m_user_profile_nama_lengkap}
                />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {userProfile.m_user_profile_nama_lengkap}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={userProfile.m_user_profile_picture || ""}
                    alt={userProfile.m_user_profile_nama_lengkap}
                  />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight gap-1">
                  <span className="truncate font-medium">
                    {userProfile.m_user_profile_nama_lengkap}
                  </span>
                  <span className="truncate text-xs">
                    {roles.map((role) => (
                      <Badge key={role.r_role_id} className="mr-1">
                        {role.r_role_nama}
                      </Badge>
                    ))}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <Link href="/profile">
                <DropdownMenuItem>
                  <UserCircle />
                  Profile
                </DropdownMenuItem>
              </Link>
              <Link href="/notification">
                <DropdownMenuItem>
                  <Bell />
                  Notifications
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={handleLogout}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
