"use server";

import { cookies } from "next/headers";

export const login = async (email: string, password: string) => {
  try {
    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/auth-manage-user/login`,
      {
        method: "POST",
        headers: {
          // Kirim token Supabase sebagai Bearer untuk otorisasi API
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        cache: "no-store", // Hindari caching respons autentikasi
      }
    );

    const data = await res.json();

    // Tangani error dari API berdasarkan isi body
    if (!res.ok) {
      const errorMessage =
        data?.error?.message || "Login gagal. Terjadi kesalahan tidak dikenal.";
      throw new Error(errorMessage);
    }

    const accessToken = data?.user?.auth?.access_token;
    const refreshToken = data?.user?.auth?.refresh_token;
    const userDetails = data?.user;

    // Validasi respons: token dan user harus ada
    if (!accessToken || !userDetails || !refreshToken) {
      // Jika tidak ada token, lempar error
      throw new Error("Respons tidak valid dari server autentikasi.");
    }

    // Simpan token ke cookie yang aman dan hanya dapat diakses server
    const cookieStore = await cookies();
    cookieStore.set("access-token", accessToken, {
      httpOnly: true, // Tidak bisa diakses via JavaScript
      secure: process.env.NODE_ENV === "production", // Hanya dikirim via HTTPS di production
      path: "/", // Berlaku di seluruh app
      sameSite: "lax", // Changed from strict to lax for better compatibility
      maxAge: 60 * 60 * 24, // Berlaku selama 1 hari
    });

    // Simpan refresh token ke cookie yang aman dan hanya dapat diakses server
    cookieStore.set("refresh-token", refreshToken, {
      httpOnly: true, // Tidak bisa diakses via JavaScript
      secure: process.env.NODE_ENV === "production", // Hanya dikirim via HTTPS di production
      path: "/", // Berlaku di seluruh app
      sameSite: "lax", // Changed from strict to lax for better compatibility
    });

    return data;
  } catch (err) {
    // Lempar ulang error agar bisa ditampilkan di UI
    if (err instanceof Error) {
      throw new Error(err.message || "Terjadi kesalahan saat login.");
    } else {
      throw new Error("Terjadi kesalahan saat login.");
    }
  }
};

export const logout = async () => {
  // Ambil token dari cookie
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access-token")?.value;

  if (!accessToken) {
    throw new Error("No token found. User is not logged in.");
  }

  const res = await fetch(
    `${process.env.SUPABASE_AUTH_API_URL}/auth-manage-user/logout`,
    {
      method: "POST",
      headers: {
        // ⚠️ Gunakan token user untuk autentikasi logout, bukan hanya anon key
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  // Jika logout gagal, lempar error
  if (!res.ok) {
    throw new Error("Logout failed. Please try again.");
  }

  // Hapus cookie hanya setelah logout berhasil
  cookieStore.delete("access-token");
  cookieStore.delete("refresh-token");

  return await res.json();
};
