import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PaymentWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  paymentStatus?: StringNullableFilter;
};
