import { MessageType } from "./enums";

export interface ChatRoom {
  id: string;
  customer_id: string | null;
  admin_id: string | null;
  created_at: string | null;
}

export interface Message {
  id: string;
  room_id: string | null;
  sender_id: string | null;
  message_type: MessageType | null;
  content: string | null;
  is_read: boolean | null;
  created_at: string | null;
}

export interface MessageAttachment {
  id: string;
  message_id: string | null;
  file_url: string | null;
  created_at: string | null;
}

export interface MessageRead {
  id: string;
  message_id: string | null;
  user_id: string | null;
  read_at: string | null;
}
