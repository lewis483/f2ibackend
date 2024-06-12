import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PoultryWhereInput = {
  count?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
