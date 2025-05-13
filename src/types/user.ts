export type UserRole = {
  r_role_id: number;
  r_role_nama: string;
  m_divisi_id: number;
  m_divisi_nama: string;
  t_user_role_expires_at: string | null;
};

export type UserProfile = {
  m_user_profile_nama_lengkap: string;
  m_user_profile_nomor_telepon: string;
  m_user_profile_alamat: string;
  m_user_profile_picture: string | null;
  m_user_profile_is_company_admin: boolean;
  m_company_id: number;
  m_user_profile_last_login: string;
  m_user_profile_two_factor_enabled: boolean;
};

export type UserProfileResponse = {
  success: boolean;
  message: string;
  user_id: string;
  email: string;
  profile: UserProfile;
  roles: UserRole[];
  permissions: any[]; // Replace with specific type if you know the structure
};
