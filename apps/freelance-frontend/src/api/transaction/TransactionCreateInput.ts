import { User1WhereUniqueInput } from "../user1/User1WhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type TransactionCreateInput = {
  amount: number;
  client: User1WhereUniqueInput;
  freelancer: User1WhereUniqueInput;
  job: JobWhereUniqueInput;
};
