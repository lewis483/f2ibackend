import { Restock as TRestock } from "../api/restock/Restock";

export const RESTOCK_TITLE_FIELD = "id";

export const RestockTitle = (record: TRestock): string => {
  return record.id?.toString() || String(record.id);
};
