import { User1WhereUniqueInput } from "../user1/User1WhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ReviewWhereInput = {
  client?: User1WhereUniqueInput;
  content?: StringFilter;
  createdAt?: DateTimeFilter;
  freelancer?: User1WhereUniqueInput;
  id?: IntFilter;
  job?: JobWhereUniqueInput;
  rating?: IntFilter;
};
