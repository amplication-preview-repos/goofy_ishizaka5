import { FloatFilter } from "../../util/FloatFilter";
import { User1WhereUniqueInput } from "../user1/User1WhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type TransactionWhereInput = {
  amount?: FloatFilter;
  client?: User1WhereUniqueInput;
  freelancer?: User1WhereUniqueInput;
  id?: IntFilter;
  job?: JobWhereUniqueInput;
  transactionDate?: DateTimeFilter;
};
