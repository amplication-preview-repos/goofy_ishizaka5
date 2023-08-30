import { BidListRelationFilter } from "../bid/BidListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { User1WhereUniqueInput } from "../user1/User1WhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type JobWhereInput = {
  bids?: BidListRelationFilter;
  budget?: FloatFilter;
  client?: User1WhereUniqueInput;
  createdAt?: DateTimeFilter;
  description?: StringFilter;
  id?: IntFilter;
  reviews?: ReviewListRelationFilter;
  title?: StringFilter;
  transactions?: TransactionListRelationFilter;
};
