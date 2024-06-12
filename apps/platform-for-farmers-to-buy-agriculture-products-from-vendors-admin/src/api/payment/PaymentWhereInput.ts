import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PurchaseOrderWhereUniqueInput } from "../purchaseOrder/PurchaseOrderWhereUniqueInput";

export type PaymentWhereInput = {
  id?: StringFilter;
  paymentStatus?: StringNullableFilter;
  purchaseOrder?: PurchaseOrderWhereUniqueInput;
};
