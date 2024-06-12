import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FarmLocationWhereInput = {
  coordinates?: JsonFilter;
  id?: StringFilter;
  locationName?: StringNullableFilter;
};
