import { InputJsonValue } from "../../types";

export type FarmLocationUpdateInput = {
  coordinates?: InputJsonValue;
  locationName?: string | null;
};
