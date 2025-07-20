// src/lib/api-client.ts

import { getAuthToken } from "@/features/auth/services/user.service";

// Fungsi inti yang akan kita gunakan berulang kali
const apiClient = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const tokens = await getAuthToken();
    if (!tokens.accessToken) {
      throw new Error("User is not authenticated");
    }

    const res = await fetch(`${process.env.SUPABASE_AUTH_API_URL}${endpoint}`, {
      ...options,
      headers: {
        ...options.headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });

    if (!res.ok) {
      // Coba baca error dari response body jika ada
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `API error: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error(`API Client Error fetching ${endpoint}:`, error);
    // Lemparkan kembali error agar bisa ditangkap oleh pemanggil
    throw error;
  }
};

export default apiClient;
