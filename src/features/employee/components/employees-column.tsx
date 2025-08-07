// moved from src/app/(protected)/employee/components/employees-column.tsx
// ...existing code...
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, IdCard, Building, Briefcase, Mail, Eye } from "lucide-react";
import Link from "next/link";
import { SortingButton } from "@/components/sorting-button";
import { Button } from "@/components/ui/button";
import { Role, UserProfile } from "@/features/auth/type";

type Employee = {
  user_id: string;
  email: string;
  profile: UserProfile;
  roles: Role[];
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "profile",
    header: ({ column }) => (
      <div className="flex items-center space-x-2">
        <User className="h-4 w-4" />
        <SortingButton column={column} label="Nama" />
      </div>
    ),
    cell: ({ row }) => {
      const profile = row.getValue("profile") as UserProfile | undefined;
      const name = profile?.m_user_profile_nama_lengkap || "-";
      const profileImage = profile?.m_user_profile_picture || "";
      const initials =
        name
          ?.split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2) || "??";

      return (
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={profileImage || undefined} alt={name} />
            <AvatarFallback className="text-sm bg-primary/10 text-primary font-medium">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <div className="font-medium text-sm truncate">{name}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "user_id",
    header: () => (
      <div className="flex items-center space-x-2">
        <IdCard className="h-4 w-4" />
        <span>ID Karyawan</span>
      </div>
    ),
    cell: ({ row }) => {
      const userId = row.getValue("user_id") as string;
      return (
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="font-mono text-xs">
            {userId?.slice(0, 8) || "-"}
          </Badge>
        </div>
      );
    },
    size: 120,
  },
  {
    id: "divisi",
    header: () => (
      <div className="flex items-center space-x-2">
        <Building className="h-4 w-4" />
        <span>Divisi</span>
      </div>
    ),
    cell: ({ row }) => {
      const roles = (row.original?.roles ?? []) as Role[];
      const divisi = roles.length > 0 ? roles[0].m_divisi_nama : null;
      return divisi ? (
        <Badge variant="outline" className="font-medium">
          {divisi}
        </Badge>
      ) : (
        <span className="text-sm text-muted-foreground">-</span>
      );
    },
  },
  {
    id: "jabatan",
    header: () => (
      <div className="flex items-center space-x-2">
        <Briefcase className="h-4 w-4" />
        <span>Jabatan</span>
      </div>
    ),
    cell: ({ row }) => {
      const roles = (row.original?.roles ?? []) as Role[];
      const jabatan = roles.length > 0 ? roles[0].r_role_nama : null;
      return jabatan ? (
        <Badge variant="default" className="font-medium">
          {jabatan}
        </Badge>
      ) : (
        <span className="text-sm text-muted-foreground">-</span>
      );
    },
  },
  {
    accessorKey: "email",
    header: () => (
      <div className="flex items-center space-x-2">
        <Mail className="h-4 w-4" />
        <span>Email</span>
      </div>
    ),
    cell: ({ row }) => {
      const email = row.getValue("email") as string;
      return (
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium truncate max-w-[200px]">
            {email}
          </span>
        </div>
      );
    },
  },
  {
    id: "detail",
    header: () => (
      <div className="flex items-center space-x-2">
        <Eye className="h-4 w-4" />
        <span>Detail</span>
      </div>
    ),
    cell: ({ row }) => (
      <Link href={`/employees/detail/${row.getValue("user_id")}`}>
        <Button
          variant="outline"
          size="sm"
          className="h-8 px-3 hover:bg-primary/5 hover:border-primary/30 transition-colors"
        >
          <Eye className="h-4 w-4 mr-1.5" />
          <span className="text-xs font-medium">Lihat</span>
        </Button>
      </Link>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
