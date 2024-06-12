import { FarmLocation as TFarmLocation } from "../api/farmLocation/FarmLocation";

export const FARMLOCATION_TITLE_FIELD = "locationName";

export const FarmLocationTitle = (record: TFarmLocation): string => {
  return record.locationName?.toString() || String(record.id);
};
