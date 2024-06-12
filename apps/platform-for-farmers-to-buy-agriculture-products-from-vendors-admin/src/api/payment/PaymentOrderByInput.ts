import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentStatus?: SortOrder;
  purchaseOrderId?: SortOrder;
  updatedAt?: SortOrder;
};
