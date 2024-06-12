import { ProduceInfo as TProduceInfo } from "../api/produceInfo/ProduceInfo";

export const PRODUCEINFO_TITLE_FIELD = "produceName";

export const ProduceInfoTitle = (record: TProduceInfo): string => {
  return record.produceName?.toString() || String(record.id);
};
