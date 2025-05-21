// lib/auth.ts
import { cookies } from "next/headers";

export async function getAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get("sb-access-token")?.value;
}

export async function getCurrentUser() {
  const token = await getAuthToken();

  if (!token) return null;

  try {
    // Fetch user data menggunakan token
    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/auth-manage-user/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) return null;

    return await res.json();
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}

export async function isAuthenticated() {
  const token = await getAuthToken();
  return !!token;
}
