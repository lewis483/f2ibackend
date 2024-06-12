import { AgriculturalProduct as TAgriculturalProduct } from "../api/agriculturalProduct/AgriculturalProduct";

export const AGRICULTURALPRODUCT_TITLE_FIELD = "name";

export const AgriculturalProductTitle = (
  record: TAgriculturalProduct
): string => {
  return record.name?.toString() || String(record.id);
};
