import { Bid } from "../bid/Bid";
import { User1 } from "../user1/User1";
import { Review } from "../review/Review";
import { Transaction } from "../transaction/Transaction";

export type Job = {
  bids?: Array<Bid>;
  budget: number;
  client?: User1;
  createdAt: Date;
  description: string;
  id: number;
  reviews?: Array<Review>;
  title: string;
  transactions?: Array<Transaction>;
};
