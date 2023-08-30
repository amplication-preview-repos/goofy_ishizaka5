import { BidUpdateManyWithoutJobsInput } from "./BidUpdateManyWithoutJobsInput";
import { User1WhereUniqueInput } from "../user1/User1WhereUniqueInput";
import { ReviewUpdateManyWithoutJobsInput } from "./ReviewUpdateManyWithoutJobsInput";
import { TransactionUpdateManyWithoutJobsInput } from "./TransactionUpdateManyWithoutJobsInput";

export type JobUpdateInput = {
  bids?: BidUpdateManyWithoutJobsInput;
  budget?: number;
  client?: User1WhereUniqueInput;
  description?: string;
  reviews?: ReviewUpdateManyWithoutJobsInput;
  title?: string;
  transactions?: TransactionUpdateManyWithoutJobsInput;
};
