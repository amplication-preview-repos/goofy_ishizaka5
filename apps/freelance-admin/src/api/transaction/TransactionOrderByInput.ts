import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  clientId?: SortOrder;
  freelancerId?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  transactionDate?: SortOrder;
};
