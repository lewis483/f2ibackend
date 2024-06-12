import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type EggBatchWhereInput = {
  batchNumber?: StringNullableFilter;
  id?: StringFilter;
  quantity?: IntNullableFilter;
};
