import { BidUpdateManyWithoutUser1sInput } from "./BidUpdateManyWithoutUser1sInput";
import { JobUpdateManyWithoutUser1sInput } from "./JobUpdateManyWithoutUser1sInput";
import { MessageUpdateManyWithoutUser1sInput } from "./MessageUpdateManyWithoutUser1sInput";
import { ReviewUpdateManyWithoutUser1sInput } from "./ReviewUpdateManyWithoutUser1sInput";
import { SkillUpdateManyWithoutUser1sInput } from "./SkillUpdateManyWithoutUser1sInput";
import { TransactionUpdateManyWithoutUser1sInput } from "./TransactionUpdateManyWithoutUser1sInput";
import { InputJsonValue } from "../../types";

export type User1UpdateInput = {
  bids?: BidUpdateManyWithoutUser1sInput;
  bio?: string | null;
  email?: string;
  jobs?: JobUpdateManyWithoutUser1sInput;
  location?: string | null;
  password?: string;
  profileImage?: string | null;
  receivedMessages?: MessageUpdateManyWithoutUser1sInput;
  reviewsAsClient?: ReviewUpdateManyWithoutUser1sInput;
  reviewsAsFreelancer?: ReviewUpdateManyWithoutUser1sInput;
  role?: "CLIENT" | "FREELANCER";
  sentMessages?: MessageUpdateManyWithoutUser1sInput;
  skills?: SkillUpdateManyWithoutUser1sInput;
  transactionsAsClient?: TransactionUpdateManyWithoutUser1sInput;
  transactionsAsFreelancer?: TransactionUpdateManyWithoutUser1sInput;
  username?: string;
  roles?: InputJsonValue;
};
