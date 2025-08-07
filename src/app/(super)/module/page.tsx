import { CreateModuleButton } from "@/features/module/components/create-module-button";
import ModuleTable from "@/features/module/components/table/module-table";
import { Box } from "lucide-react";
import React from "react";

const ModulePage = () => {
  return (
    <div className="flex flex-col flex-1 px-6 py-4">
      <div className="flex items-center justify-between gap-2 mb-4 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Box className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold">Modul</h2>
        </div>
        <CreateModuleButton />
      </div>
      <div className="flex-1 overflow-auto">
        <ModuleTable />
      </div>
    </div>
  );
};

export default ModulePage;
