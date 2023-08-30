import { User1 } from "../user1/User1";
import { Job } from "../job/Job";

export type Transaction = {
  amount: number;
  client?: User1;
  freelancer?: User1;
  id: number;
  job?: Job;
  transactionDate: Date;
};
