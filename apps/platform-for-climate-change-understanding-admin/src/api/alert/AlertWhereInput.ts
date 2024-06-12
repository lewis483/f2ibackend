import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AlertWhereInput = {
  alertName?: StringNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
};
