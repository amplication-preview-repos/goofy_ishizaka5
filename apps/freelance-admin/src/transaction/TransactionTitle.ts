import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "id";

export const TransactionTitle = (record: TTransaction): string => {
  return record.id || String(record.id);
};
