import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  UserProfile,
  UserProfileResponse,
  Role,
} from "@/features/auth/type";

// Definisikan state yang lebih terstruktur
interface AuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  userProfile: UserProfile | null;
  roles: Role[];
  permissions: string[];
  login: (response: UserProfileResponse) => void;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      // State awal
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null,
      userProfile: null,
      roles: [],
      permissions: [],

      // Aksi untuk login
      login: (response: UserProfileResponse) => {
        const { auth, profile, roles, permission } = response.data.user;

        // Set setiap bagian state secara eksplisit
        set({
          isLoggedIn: true,
          accessToken: auth.access_token,
          refreshToken: auth.refresh_token,
          userProfile: profile,
          roles: roles,
          permissions: permission,
        });
      },

      // Aksi untuk logout
      logout: () => {
        // Reset semua state ke kondisi awal
        set({
          isLoggedIn: false,
          accessToken: null,
          refreshToken: null,
          userProfile: null,
          roles: [],
          permissions: [],
        });
        // Opsional: panggil API logout di sini
      },
    }),
    {
      name: "auth-storage", // Nama untuk localStorage
      // Opsional (tapi sangat direkomendasikan): Hanya simpan data yang perlu
      // agar tidak menyimpan data temporary atau fungsi.
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        userProfile: state.userProfile,
        roles: state.roles,
        permissions: state.permissions,
      }),
    }
  )
);
