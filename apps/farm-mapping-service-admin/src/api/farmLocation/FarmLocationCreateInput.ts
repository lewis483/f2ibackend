import { InputJsonValue } from "../../types";

export type FarmLocationCreateInput = {
  coordinates?: InputJsonValue;
  locationName?: string | null;
};
