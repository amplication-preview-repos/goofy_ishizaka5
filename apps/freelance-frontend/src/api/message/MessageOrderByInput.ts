import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  id?: SortOrder;
  receiverId?: SortOrder;
  senderId?: SortOrder;
  sentAt?: SortOrder;
};
