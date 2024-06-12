import { ProduceWhereUniqueInput } from "../produce/ProduceWhereUniqueInput";

export type PricingCreateInput = {
  pricePerUnit?: number | null;
  produce?: ProduceWhereUniqueInput | null;
};
