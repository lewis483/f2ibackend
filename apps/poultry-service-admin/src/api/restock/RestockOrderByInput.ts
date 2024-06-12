import { SortOrder } from "../../util/SortOrder";

export type RestockOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  restockDate?: SortOrder;
  updatedAt?: SortOrder;
};
