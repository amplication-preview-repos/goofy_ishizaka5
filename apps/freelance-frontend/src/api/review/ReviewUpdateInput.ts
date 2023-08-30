import { User1WhereUniqueInput } from "../user1/User1WhereUniqueInput";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ReviewUpdateInput = {
  client?: User1WhereUniqueInput;
  content?: string;
  freelancer?: User1WhereUniqueInput;
  job?: JobWhereUniqueInput;
  rating?: number;
};
