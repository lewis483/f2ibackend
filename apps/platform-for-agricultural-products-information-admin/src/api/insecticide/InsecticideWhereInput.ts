import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InsecticideWhereInput = {
  id?: StringFilter;
  productName?: StringNullableFilter;
  usageDetails?: StringNullableFilter;
};
