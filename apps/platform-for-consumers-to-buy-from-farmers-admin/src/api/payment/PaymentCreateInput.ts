import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentCreateInput = {
  order?: OrderWhereUniqueInput | null;
  paymentStatus?: string | null;
};
