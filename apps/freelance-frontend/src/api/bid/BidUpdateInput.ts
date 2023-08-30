import { User1WhereUniqueInput } from "../user1/User1WhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type BidUpdateInput = {
  amount?: number;
  freelancer?: User1WhereUniqueInput;
  job?: JobWhereUniqueInput;
  proposal?: string;
};
