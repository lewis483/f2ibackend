import { EggBatch as TEggBatch } from "../api/eggBatch/EggBatch";

export const EGGBATCH_TITLE_FIELD = "batchNumber";

export const EggBatchTitle = (record: TEggBatch): string => {
  return record.batchNumber?.toString() || String(record.id);
};
