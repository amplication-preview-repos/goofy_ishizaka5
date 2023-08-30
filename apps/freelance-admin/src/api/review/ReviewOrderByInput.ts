import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  clientId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  freelancerId?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  rating?: SortOrder;
};
