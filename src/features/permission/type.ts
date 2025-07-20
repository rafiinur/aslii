export type Permission = {
  sys_permission_id: number; // Assuming you have an ID for keys and actions
  sys_permission_nama: string;
  sys_permission_deskripsi: string;
  sys_permission_module: string;
  sys_permission_group: string;
  sys_permission_is_system_permission: boolean;
};
