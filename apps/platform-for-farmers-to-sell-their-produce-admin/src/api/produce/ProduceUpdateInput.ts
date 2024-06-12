import { PricingUpdateManyWithoutProducesInput } from "./PricingUpdateManyWithoutProducesInput";

export type ProduceUpdateInput = {
  name?: string | null;
  pricings?: PricingUpdateManyWithoutProducesInput;
  quantity?: number | null;
};
