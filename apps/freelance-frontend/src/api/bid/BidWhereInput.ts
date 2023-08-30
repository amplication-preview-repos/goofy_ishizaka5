import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { User1WhereUniqueInput } from "../user1/User1WhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type BidWhereInput = {
  amount?: FloatFilter;
  createdAt?: DateTimeFilter;
  freelancer?: User1WhereUniqueInput;
  id?: IntFilter;
  job?: JobWhereUniqueInput;
  proposal?: StringFilter;
};
