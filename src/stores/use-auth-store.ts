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

/**
 * Definisikan tipe untuk state yang akan disimpan (dipersist).
 * Kita menggunakan `Omit` untuk mengambil semua properti dari `AuthState`
 * KECUALI fungsi 'login' dan 'logout'.
 */
type PersistedAuthState = Omit<AuthState, "login" | "logout">;

export const useAuthStore = create(
  // Berikan kedua tipe ke `persist`: tipe state penuh dan tipe state yang disimpan.
  persist<AuthState, [], [], PersistedAuthState>(
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
        set({
          isLoggedIn: false,
          accessToken: null,
          refreshToken: null,
          userProfile: null,
          roles: [],
          permissions: [],
        });
      },
    }),
    {
      name: "auth-storage",
      // Fungsi `partialize` sekarang secara type-safe mengembalikan `PersistedAuthState`.
      partialize: (state): PersistedAuthState => ({
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
