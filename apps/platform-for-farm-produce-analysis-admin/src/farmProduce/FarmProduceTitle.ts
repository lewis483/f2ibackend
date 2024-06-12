import { FarmProduce as TFarmProduce } from "../api/farmProduce/FarmProduce";

export const FARMPRODUCE_TITLE_FIELD = "produceName";

export const FarmProduceTitle = (record: TFarmProduce): string => {
  return record.produceName?.toString() || String(record.id);
};
