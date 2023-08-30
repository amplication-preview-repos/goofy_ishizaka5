import { BidCreateNestedManyWithoutUser1sInput } from "./BidCreateNestedManyWithoutUser1sInput";
import { JobCreateNestedManyWithoutUser1sInput } from "./JobCreateNestedManyWithoutUser1sInput";
import { MessageCreateNestedManyWithoutUser1sInput } from "./MessageCreateNestedManyWithoutUser1sInput";
import { ReviewCreateNestedManyWithoutUser1sInput } from "./ReviewCreateNestedManyWithoutUser1sInput";
import { SkillCreateNestedManyWithoutUser1sInput } from "./SkillCreateNestedManyWithoutUser1sInput";
import { TransactionCreateNestedManyWithoutUser1sInput } from "./TransactionCreateNestedManyWithoutUser1sInput";
import { InputJsonValue } from "../../types";

export type User1CreateInput = {
  bids?: BidCreateNestedManyWithoutUser1sInput;
  bio?: string | null;
  email: string;
  jobs?: JobCreateNestedManyWithoutUser1sInput;
  location?: string | null;
  password: string;
  profileImage?: string | null;
  receivedMessages?: MessageCreateNestedManyWithoutUser1sInput;
  reviewsAsClient?: ReviewCreateNestedManyWithoutUser1sInput;
  reviewsAsFreelancer?: ReviewCreateNestedManyWithoutUser1sInput;
  role: "CLIENT" | "FREELANCER";
  sentMessages?: MessageCreateNestedManyWithoutUser1sInput;
  skills?: SkillCreateNestedManyWithoutUser1sInput;
  transactionsAsClient?: TransactionCreateNestedManyWithoutUser1sInput;
  transactionsAsFreelancer?: TransactionCreateNestedManyWithoutUser1sInput;
  username: string;
  roles: InputJsonValue;
};
