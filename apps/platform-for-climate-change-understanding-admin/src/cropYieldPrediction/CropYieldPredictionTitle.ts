import { CropYieldPrediction as TCropYieldPrediction } from "../api/cropYieldPrediction/CropYieldPrediction";

export const CROPYIELDPREDICTION_TITLE_FIELD = "cropName";

export const CropYieldPredictionTitle = (
  record: TCropYieldPrediction
): string => {
  return record.cropName?.toString() || String(record.id);
};
