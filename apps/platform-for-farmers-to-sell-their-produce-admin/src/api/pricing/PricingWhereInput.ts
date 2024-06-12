import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProduceWhereUniqueInput } from "../produce/ProduceWhereUniqueInput";

export type PricingWhereInput = {
  id?: StringFilter;
  pricePerUnit?: FloatNullableFilter;
  produce?: ProduceWhereUniqueInput;
};
