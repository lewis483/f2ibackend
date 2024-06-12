import { Fertilizer as TFertilizer } from "../api/fertilizer/Fertilizer";

export const FERTILIZER_TITLE_FIELD = "productName";

export const FertilizerTitle = (record: TFertilizer): string => {
  return record.productName?.toString() || String(record.id);
};
