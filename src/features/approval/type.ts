export type Approval = {
  workflowId: number;
  action: "approve" | "reject";
  note?: string;
};

export type LeaveApproval = {
  t_cuti_id: number;
  m_user_profile_id: string;
  t_cuti_tanggal_mulai: string;
  t_cuti_tanggal_berakhir: string;
  t_cuti_status: string;
  t_cuti_durasi_hari: number;
  t_cuti_attachment: string;
  pengaju: {
    m_user_divisi: {
      m_divisi_nama: string;
    }[];
    m_user_profile_nama_lengkap: string;
  };
  approver: {
    m_user_profile_nama_lengkap: string;
  };
  r_cuti_tipe: {
    r_cuti_tipe_nama: string;
  };
};

export type LeaveType = {
  r_cuti_tipe_id: number;
  m_company_id: number;
  r_cuti_tipe_nama: string;
  r_cuti_tipe_deskripsi: string;
  r_cuti_tipe_kuota_tahunan: number;
  r_cuti_tipe_butuh_approval: boolean;
  r_cuti_tipe_dapat_diakumulasi: boolean;
  r_cuti_tipe_max_akumulasi: number;
  created_at: Date;
  updated_at: Date;
  r_cuti_tipe_is_aktif: boolean;
};

export type OvertimeApproval = {
  t_overtime_id: number;
  m_user_profile_id: string;
  t_overtime_tanggal: string;
  t_overtime_waktu_mulai: string;
  t_overtime_waktu_berakhir: string;
  t_overtime_durasi_jam: number;
  t_overtime_status: string;
  pengaju: {
    m_user_divisi: string[];
    m_user_profile_nama_lengkap: string;
  };
  approver: string;
};
