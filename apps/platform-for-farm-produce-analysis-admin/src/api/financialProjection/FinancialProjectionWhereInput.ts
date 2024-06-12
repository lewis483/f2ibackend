import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FinancialProjectionWhereInput = {
  id?: StringFilter;
  projectionDetails?: StringNullableFilter;
  projectionName?: StringNullableFilter;
};
