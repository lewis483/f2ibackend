import { PaymentUpdateManyWithoutPurchaseOrdersInput } from "./PaymentUpdateManyWithoutPurchaseOrdersInput";

export type PurchaseOrderUpdateInput = {
  orderDate?: Date | null;
  payments?: PaymentUpdateManyWithoutPurchaseOrdersInput;
  totalAmount?: number | null;
};
