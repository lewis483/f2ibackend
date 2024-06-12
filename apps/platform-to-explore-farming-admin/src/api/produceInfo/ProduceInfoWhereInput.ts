import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProduceInfoWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  produceName?: StringNullableFilter;
};
