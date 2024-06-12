import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type RestockWhereInput = {
  id?: StringFilter;
  quantity?: IntNullableFilter;
  restockDate?: DateTimeNullableFilter;
};
