import { WeaselGender, WeaselStatus } from "./enums";

export interface Weasel {
  id: number;
  name: string;
  description: string | null;
  category_id: number | null;
  breed: string | null;
  gender: WeaselGender | null;
  color: string | null;
  age_months: number | null;
  weight_kg: number | null;
  price: number;
  stock: number | null;
  status: WeaselStatus | null;
  thumbnail_url: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface WeaselImage {
  id: number;
  weasel_id: number | null;
  image_url: string;
  is_primary: boolean | null;
  created_at: string | null;
}
