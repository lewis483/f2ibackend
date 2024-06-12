import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FertilizerWhereInput = {
  id?: StringFilter;
  productName?: StringNullableFilter;
  usageDetails?: StringNullableFilter;
};
