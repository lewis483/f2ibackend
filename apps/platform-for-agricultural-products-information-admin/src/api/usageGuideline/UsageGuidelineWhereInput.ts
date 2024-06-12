import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UsageGuidelineWhereInput = {
  description?: StringNullableFilter;
  guidelineTitle?: StringNullableFilter;
  id?: StringFilter;
};
