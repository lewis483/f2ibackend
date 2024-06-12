import { Insecticide as TInsecticide } from "../api/insecticide/Insecticide";

export const INSECTICIDE_TITLE_FIELD = "productName";

export const InsecticideTitle = (record: TInsecticide): string => {
  return record.productName?.toString() || String(record.id);
};
