import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClimateDataWhereInput = {
  dataName?: StringNullableFilter;
  details?: StringNullableFilter;
  id?: StringFilter;
};
