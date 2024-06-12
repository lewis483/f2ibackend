import { PricingCreateNestedManyWithoutProducesInput } from "./PricingCreateNestedManyWithoutProducesInput";

export type ProduceCreateInput = {
  name?: string | null;
  pricings?: PricingCreateNestedManyWithoutProducesInput;
  quantity?: number | null;
};
