import { FarmerProfile as TFarmerProfile } from "../api/farmerProfile/FarmerProfile";

export const FARMERPROFILE_TITLE_FIELD = "name";

export const FarmerProfileTitle = (record: TFarmerProfile): string => {
  return record.name?.toString() || String(record.id);
};
