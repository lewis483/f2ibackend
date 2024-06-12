import { PaymentCreateNestedManyWithoutPurchaseOrdersInput } from "./PaymentCreateNestedManyWithoutPurchaseOrdersInput";

export type PurchaseOrderCreateInput = {
  orderDate?: Date | null;
  payments?: PaymentCreateNestedManyWithoutPurchaseOrdersInput;
  totalAmount?: number | null;
};
