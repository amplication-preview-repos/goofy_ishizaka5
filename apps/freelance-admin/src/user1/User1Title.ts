import { User1 as TUser1 } from "../api/user1/User1";

export const USER1_TITLE_FIELD = "username";

export const User1Title = (record: TUser1): string => {
  return record.username || String(record.id);
};
