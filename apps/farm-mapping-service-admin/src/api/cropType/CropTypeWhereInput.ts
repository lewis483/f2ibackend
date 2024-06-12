import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CropTypeWhereInput = {
  cropName?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
};
