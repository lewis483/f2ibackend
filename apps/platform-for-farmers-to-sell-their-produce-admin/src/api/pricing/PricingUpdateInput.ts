import { ProduceWhereUniqueInput } from "../produce/ProduceWhereUniqueInput";

export type PricingUpdateInput = {
  pricePerUnit?: number | null;
  produce?: ProduceWhereUniqueInput | null;
};
