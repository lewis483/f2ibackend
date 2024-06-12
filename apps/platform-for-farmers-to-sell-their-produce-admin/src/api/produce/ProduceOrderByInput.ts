import { SortOrder } from "../../util/SortOrder";

export type ProduceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
