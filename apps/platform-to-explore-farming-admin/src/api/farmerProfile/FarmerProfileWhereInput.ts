import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FarmerProfileWhereInput = {
  bio?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
