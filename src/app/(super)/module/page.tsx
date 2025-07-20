import { CreateModuleButton } from "@/features/module/components/create-module-button";
import ModuleTable from "@/features/module/components/table/module-table";
import { Box } from "lucide-react";
import React from "react";

const ModulePage = () => {
  return (
    <>
      <div className="flex items-end justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <Box className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold">Modul</h2>
        </div>
        <CreateModuleButton />
      </div>
      <ModuleTable />
    </>
  );
};

export default ModulePage;
