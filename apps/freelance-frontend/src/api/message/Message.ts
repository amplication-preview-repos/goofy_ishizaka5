import { User1 } from "../user1/User1";

export type Message = {
  content: string;
  id: number;
  receiver?: User1;
  sender?: User1;
  sentAt: Date;
};
