import { createClient } from "./supabase/server";

export const getProjects = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("t_project").select("*");

  if (error) {
    console.error("Error fetching projects:", error);
    return { projects: [] };
  }

  return data;
};
