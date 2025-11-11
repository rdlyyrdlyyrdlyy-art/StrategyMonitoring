export type UserRole =
  | 'admin'
  | 'auditor'
  | 'approver'
  | 'requester'
  | 'observer';

export interface MenuItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  children?: MenuItem[];
  requiredRoles?: UserRole[];
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}
