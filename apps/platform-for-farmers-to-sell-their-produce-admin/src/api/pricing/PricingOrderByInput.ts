import { SortOrder } from "../../util/SortOrder";

export type PricingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  pricePerUnit?: SortOrder;
  produceId?: SortOrder;
  updatedAt?: SortOrder;
};
