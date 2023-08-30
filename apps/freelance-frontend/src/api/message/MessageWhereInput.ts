import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { User1WhereUniqueInput } from "../user1/User1WhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type MessageWhereInput = {
  content?: StringFilter;
  id?: IntFilter;
  receiver?: User1WhereUniqueInput;
  sender?: User1WhereUniqueInput;
  sentAt?: DateTimeFilter;
};
