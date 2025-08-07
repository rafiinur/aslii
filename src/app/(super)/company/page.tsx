import CompanyTable from "@/features/company/components/table/company-table";
import { Building2 } from "lucide-react";

const CompanyPage = () => {
  return (
    <div className="flex flex-col flex-1 px-6 py-4">
      <div className="flex items-center justify-between gap-2 mb-4 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold">Company</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <CompanyTable />
      </div>
    </div>
  );
};

export default CompanyPage;
