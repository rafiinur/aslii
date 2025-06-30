import type { UserProfile } from "@/features/auth/type";
import { create } from "zustand";
import { persist } from "zustand/middleware"; // 1. Impor `persist`

interface ProfileState {
  profile: UserProfile | null;
  status: "idle" | "loading" | "success" | "error";
  setProfile: (profile: UserProfile) => void;
  logout: () => void;
}

// 2. Bungkus semua dengan `persist`
export const useProfileStore = create(
  persist<ProfileState>(
    (set) => ({
      profile: null,
      status: "idle",

      setProfile: (profile: UserProfile) => {
        set({ profile: profile, status: "success" });
      },

      logout: () => {
        // Di sini Anda juga sebaiknya memanggil action logout dari server
        set({ profile: null, status: "idle" });
      },
    }),
    {
      // 3. Berikan nama unik untuk penyimpanan di localStorage
      name: "user-profile-storage",
    }
  )
);
