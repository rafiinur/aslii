export type Approval = {
  workflowId: number;
  action: "approve" | "reject";
  note?: string;
};

// export type LeaveApproval = {}

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

// export type OvertimeApproval = {}
