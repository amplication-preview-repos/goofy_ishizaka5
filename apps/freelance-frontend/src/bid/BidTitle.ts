import { Bid as TBid } from "../api/bid/Bid";

export const BID_TITLE_FIELD = "proposal";

export const BidTitle = (record: TBid): string => {
  return record.proposal || String(record.id);
};
