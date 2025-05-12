import { createClient } from "./server";

export const getCompanyById = async (companyId: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("m_company")
    .select("*")
    .eq("m_company_id", companyId)
    .single();

  if (error) {
    console.error("Error fetching company:", error);
    return null;
  }

  return data;
};
