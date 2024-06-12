import { Pesticide as TPesticide } from "../api/pesticide/Pesticide";

export const PESTICIDE_TITLE_FIELD = "productName";

export const PesticideTitle = (record: TPesticide): string => {
  return record.productName?.toString() || String(record.id);
};
