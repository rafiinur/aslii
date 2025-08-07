import { CreateRoleButton } from "@/features/role/components/create-role-button";
import RoleTable from "@/features/role/components/table/role-table";
import { UserLock } from "lucide-react";
import React from "react";

const RolePage = () => {
  return (
    <div className="flex flex-col flex-1 px-6 py-4">
      <div className="flex items-center justify-between gap-2 mb-4 flex-shrink-0">
        <div className="flex items-center gap-2">
          <UserLock className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold">Role</h2>
        </div>
        <CreateRoleButton />
      </div>
      <div className="flex-1 overflow-auto">
        <RoleTable />
      </div>
    </div>
  );
};

export default RolePage;
