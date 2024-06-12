import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  orderDate?: Date | null;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
  totalAmount?: number | null;
};
