import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PesticideWhereInput = {
  id?: StringFilter;
  productName?: StringNullableFilter;
  usageDetails?: StringNullableFilter;
};
