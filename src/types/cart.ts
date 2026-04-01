export interface Cart {
  id: number;
  user_id: string | null;
  created_at: string | null;
}

export interface CartItem {
  id: number;
  cart_id: number | null;
  weasel_id: number | null;
  quantity: number | null;
  unit_price: number | null;
  created_at: string | null;
}
