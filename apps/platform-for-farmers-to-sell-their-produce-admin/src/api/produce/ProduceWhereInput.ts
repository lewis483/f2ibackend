import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PricingListRelationFilter } from "../pricing/PricingListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProduceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  pricings?: PricingListRelationFilter;
  quantity?: IntNullableFilter;
};
