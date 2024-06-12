import { JsonValue } from "type-fest";

export type FarmLocation = {
  coordinates: JsonValue;
  createdAt: Date;
  id: string;
  locationName: string | null;
  updatedAt: Date;
};
