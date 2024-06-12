import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentUpdateInput = {
  order?: OrderWhereUniqueInput | null;
  paymentStatus?: string | null;
};
