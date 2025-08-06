"use server";

import { createClient } from "@/lib/supabase/server";

export const login = async (email: string, password: string) => {
  try {
    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/auth-manage-user/login`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Login gagal.");
    }

    console.log("Login berhasil:", result);

    const accessToken = result?.data?.user?.auth?.access_token;
    const refreshToken = result?.data?.user?.auth?.refresh_token;

    if (!accessToken || !refreshToken) {
      throw new Error("Token tidak valid.");
    }

    const supabase = await createClient();

    // Supabase akan otomatis atur cookie sb-access-token & sb-refresh-token
    await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    return result.user;
  } catch (err) {
    console.error("Login error:", err);
    return { success: false, message: "Login gagal. Silakan coba lagi." };
  }
};

export const logout = async () => {
  try {
    const supabase = await createClient();

    const {
      data: { session },
    } = await supabase.auth.getSession();

    const accessToken = session?.access_token;
    const refreshToken = session?.refresh_token;

    if (!accessToken || !refreshToken) {
      throw new Error("Token tidak ditemukan.");
    }

    // 🔁 Call custom API logout
    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/auth-manage-user/logout`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData?.error?.message || "Gagal logout dari server.");
    }

    // ❌ Clear Supabase session
    await supabase.auth.signOut();

    return { success: true };
  } catch (error) {
    console.error("Logout gagal:", error);
    throw new Error(
      typeof error === "string"
        ? error
        : error instanceof Error
        ? error.message
        : "Logout gagal."
    );
  }
};
