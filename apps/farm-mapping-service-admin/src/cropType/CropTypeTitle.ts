import { CropType as TCropType } from "../api/cropType/CropType";

export const CROPTYPE_TITLE_FIELD = "cropName";

export const CropTypeTitle = (record: TCropType): string => {
  return record.cropName?.toString() || String(record.id);
};
