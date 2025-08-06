import { getAllRoleCompany } from "@/features/role_company/services/role-company.service";
import RoleCompanyTableClient from "@/features/role_company/components/table/role-company-table-client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CreateRoleCompanyButton } from "@/features/role_company/components/create-role-company-button";


const RoleCompanyPage = async () => {
  // const data = await getAllRoleCompany(); // Tidak perlu jika fetch di client

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-lg">Daftar Role Perusahaan</h4>
        <CreateRoleCompanyButton />
      </div>
      <RoleCompanyTableClient />
    </div>
  );
};

export default RoleCompanyPage;