export interface Wishlist {
  id: number;
  user_id: string | null;
  created_at: string | null;
}

export interface WishlistItem {
  id: number;
  wishlist_id: number | null;
  weasel_id: number | null;
  created_at: string | null;
}
