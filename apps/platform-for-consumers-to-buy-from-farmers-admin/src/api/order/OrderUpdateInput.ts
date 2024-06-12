import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  totalAmount?: number | null;
};
