import { SortOrder } from "../../util/SortOrder";

export type BidOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  freelancerId?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  proposal?: SortOrder;
};
