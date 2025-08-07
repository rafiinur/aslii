import { getModuleCompany } from "@/features/module-company/services/module-company.service";
import ModuleCompanyTable from "@/features/module-company/table/module-company-table";
const ModuleCompanyPage = async () => {
  const ModuleCompany = await getModuleCompany();

  return (
    <div className="flex flex-col gap-4 px-6 py-4">
      <h4 className="font-semibold text-lg">Daftar Module</h4>
      <ModuleCompanyTable
        allModuleCompanies={ModuleCompany}
        companyModules={ModuleCompany}
      />
    </div>
  );
};

export default ModuleCompanyPage;
