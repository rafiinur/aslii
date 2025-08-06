"use client";
import { useEffect, useState } from "react";
import { DataTable } from "@/components/data-table";
import { roleCompanyColumns } from "./role-company-column-client";
import { getAllRoleCompany, RoleCompany } from "../../services/role-company.service";

const RoleCompanyTableClient = () => {
  const [data, setData] = useState<RoleCompany[]>([]);

  useEffect(() => {
    getAllRoleCompany().then(setData);
  }, []);

  return <DataTable columns={roleCompanyColumns} data={data} />;
};

export default RoleCompanyTableClient;