import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AgriculturalProductWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  quantity?: IntNullableFilter;
};
