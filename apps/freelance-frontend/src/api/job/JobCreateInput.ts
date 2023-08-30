import { BidCreateNestedManyWithoutJobsInput } from "./BidCreateNestedManyWithoutJobsInput";
import { User1WhereUniqueInput } from "../user1/User1WhereUniqueInput";
import { ReviewCreateNestedManyWithoutJobsInput } from "./ReviewCreateNestedManyWithoutJobsInput";
import { TransactionCreateNestedManyWithoutJobsInput } from "./TransactionCreateNestedManyWithoutJobsInput";

export type JobCreateInput = {
  bids?: BidCreateNestedManyWithoutJobsInput;
  budget: number;
  client: User1WhereUniqueInput;
  description: string;
  reviews?: ReviewCreateNestedManyWithoutJobsInput;
  title: string;
  transactions?: TransactionCreateNestedManyWithoutJobsInput;
};
