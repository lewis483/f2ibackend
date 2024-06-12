import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FarmProduceWhereInput = {
  id?: StringFilter;
  produceName?: StringNullableFilter;
  quantity?: IntNullableFilter;
};
