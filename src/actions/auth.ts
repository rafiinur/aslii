// src/actions/auth.ts
"use server";

import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

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

    const data = await res.json();

    if (!res.ok) {
      throw new Error("Login gagal.");
    }

    const accessToken = data?.user?.auth?.access_token;
    const refreshToken = data?.user?.auth?.refresh_token;

    if (!accessToken || !refreshToken) {
      throw new Error("Token tidak valid.");
    }

    const cookieStore = await cookies();
    const supabase = await createClient();

    // Set Supabase session (akan otomatis mengatur cookie sb-* kalau pakai helper)
    await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    // Optional: custom set cookie HttpOnly (manual override, kalau mau)
    cookieStore.set("sb-access-token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    cookieStore.set("sb-refresh-token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
  } catch (err) {
    console.error("Login error:", err);
    throw new Error("Login gagal. Silakan coba lagi.");
  }
};

export const logout = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("sb-access-token")?.value;
  const refreshToken = cookieStore.get("sb-refresh-token")?.value;

  if (!accessToken || !refreshToken) {
    throw new Error("Token tidak ditemukan.");
  }

  // 🔁 Custom API logout (misal revoke token di backend kamu)
  const res = await fetch(
    `${process.env.SUPABASE_AUTH_API_URL}/auth-manage-user/logout`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh_token: refreshToken }), // Kalau butuh
    }
  );

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData?.error?.message || "Gagal logout dari server.");
  }

  // ⛔ Clear session dari Supabase SDK (biar cookie Supabase juga bersih)
  const supabase = await createClient();
  await supabase.auth.signOut();

  cookieStore.set("sb-access-token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  cookieStore.set("sb-refresh-token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
};
