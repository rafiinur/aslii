import { CreatePermissionButton } from "@/features/permission/components/create-permission-button";
import PermissionTable from "@/features/permission/components/table/permission-table";
import { KeyRound } from "lucide-react";
import React from "react";

const PermissionPage = async () => {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-2">
          <KeyRound className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold">Permission</h2>
        </div>
        <CreatePermissionButton />
      </div>
      <PermissionTable />
    </>
  );
};

export default PermissionPage;
