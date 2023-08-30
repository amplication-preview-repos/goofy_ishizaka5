import { User1WhereUniqueInput } from "../user1/User1WhereUniqueInput";

export type MessageUpdateInput = {
  content?: string;
  receiver?: User1WhereUniqueInput;
  sender?: User1WhereUniqueInput;
};
