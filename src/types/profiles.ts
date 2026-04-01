import { UserRole } from "./enums";

export interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  phone: string | null;
  role: UserRole | null;
  created_at: string | null;
}
