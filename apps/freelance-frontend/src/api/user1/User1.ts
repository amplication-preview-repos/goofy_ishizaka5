import { Bid } from "../bid/Bid";
import { Job } from "../job/Job";
import { Message } from "../message/Message";
import { Review } from "../review/Review";
import { Skill } from "../skill/Skill";
import { Transaction } from "../transaction/Transaction";
import { JsonValue } from "type-fest";

export type User1 = {
  bids?: Array<Bid>;
  bio: string | null;
  createdAt: Date;
  email: string;
  id: number;
  jobs?: Array<Job>;
  location: string | null;
  profileImage: string | null;
  receivedMessages?: Array<Message>;
  reviewsAsClient?: Array<Review>;
  reviewsAsFreelancer?: Array<Review>;
  role?: "CLIENT" | "FREELANCER";
  sentMessages?: Array<Message>;
  skills?: Array<Skill>;
  transactionsAsClient?: Array<Transaction>;
  transactionsAsFreelancer?: Array<Transaction>;
  username: string;
  roles: JsonValue;
};
