import { createClient } from "@/lib/supabase/server";

/**
 * Ambil token dari session Supabase SDK.
 * @returns { accessToken: string | null, refreshToken: string | null }
 */
export async function getAuthToken() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return {
    accessToken: session?.access_token || null,
    refreshToken: session?.refresh_token || null,
  };
}

/**
 * Cek apakah user sudah login berdasarkan keberadaan session.
 */
export async function isAuthenticated() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return !!session;
}

/**
 * Ambil data user dari API berdasarkan token.
 */
export async function getUserProfile() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) return null;

  try {
    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/auth-manage-user/profile`,
      {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
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

/**
 * Trigger refresh token untuk access token baru.
 */
export async function refreshAuthToken() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.refresh_token) return null;

  try {
    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/auth-manage-user/refresh-session`,
      {
        method: "POST",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh_token: session.refresh_token,
        }),
        cache: "no-store",
      }
    );

    if (!res.ok) return null;

    const data = await res.json();

    const newAccess = data?.access_token;
    const newRefresh = data?.refresh_token;

    if (!newAccess || !newRefresh) return null;

    // Update session di Supabase agar cookie juga ikut ke-update
    await supabase.auth.setSession({
      access_token: newAccess,
      refresh_token: newRefresh,
    });

    return true;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
}

/**
 * Cek apakah user adalah super admin.
 * @returns boolean
 */

export async function isSuperAdmin() {
  const user = await getUserProfile();

  console.log("User profile:", user);

  return !!user?.m_user_profile_is_super;
}

/**
 * Cek apakah user adalah company admin.
 * @returns boolean
 */

export async function isCompanyAdmin() {
  const user = await getUserProfile();

  return !!user?.m_user_profile_is_company_admin;
}

/**
 * Ambil semua roles yang tersedia di sistem.
 * @returns {Promise<Array>} Daftar roles
 */

export async function getAllRoles() {
  try {
    const tokens = await getAuthToken();

    if (!tokens.accessToken) {
      throw new Error("Access token is missing");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/auth-manage-user/roles`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens.accessToken}`,
        },
        cache: "no-store",
      }
    );

    return await res.json();
  } catch (error) {
    console.error("Error fetching roles:", error);
    throw new Error("Failed to fetch roles");
  }
}
