import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
