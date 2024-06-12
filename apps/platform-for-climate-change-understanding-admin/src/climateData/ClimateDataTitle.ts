import { ClimateData as TClimateData } from "../api/climateData/ClimateData";

export const CLIMATEDATA_TITLE_FIELD = "dataName";

export const ClimateDataTitle = (record: TClimateData): string => {
  return record.dataName?.toString() || String(record.id);
};
