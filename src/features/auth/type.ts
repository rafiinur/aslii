export type User = {
  user_id: string;
  email: string;
  profile: UserProfile;
};

export type UserAuth = {
  user_id: string;
  email: string;
  access_token: string;
  refresh_token: string;
};

export type UserProfile = {
  m_user_profile_nama_lengkap: string;
  m_user_profile_nomor_telepon: string;
  m_user_profile_alamat: string;
  m_user_profile_picture: string | null;
  m_user_profile_is_company_admin: boolean;
  m_user_profile_is_super: boolean;
  m_company_id: number;
  m_user_profile_last_login: string;
  m_user_profile_two_factor_enabled: boolean;
};

export type UserProfileResponse = {
  success: boolean;
  message: string;
  data: {
    user: {
      auth: UserAuth;
      profile: UserProfile;
      roles: Role[];
      permission: string[];
    };
  };
};

export type Role = {
  r_role_id: string;
  r_role_nama: string;
  m_divisi_id: string;
  m_divisi_nama: string;
  t_user_role_expires_at: string | null;
};
