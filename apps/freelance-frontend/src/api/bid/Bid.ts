import { User1 } from "../user1/User1";
import { Job } from "../job/Job";

export type Bid = {
  amount: number;
  createdAt: Date;
  freelancer?: User1;
  id: number;
  job?: Job;
  proposal: string;
};
