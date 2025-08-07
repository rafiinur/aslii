import DivisionTable from "@/features/division/components/table/division-table";
import { BriefcaseBusiness } from "lucide-react";
import React from "react";
import { CreateDivisionButton } from "@/features/division/components/table/button-company/create-division-button";

const DivisionPage = () => {
  return (
    <div className="flex flex-col flex-1 px-6 py-4">
      <div className="flex items-center justify-between gap-2 mb-4 flex-shrink-0">
        <div className="flex items-center gap-2">
          <BriefcaseBusiness className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold">Divisi</h2>
        </div>
        <CreateDivisionButton />
      </div>
      <div className="flex-1 overflow-auto">
        <DivisionTable />
      </div>
    </div>
  );
};

export default DivisionPage;
