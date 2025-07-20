import CompanyTable from "@/features/company/components/table/company-table";
import { Building2 } from "lucide-react";

const CompanyPage = () => {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <Building2 className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-lg font-semibold">Company</h2>
      </div>
      <CompanyTable />
    </>
  );
};

export default CompanyPage;
