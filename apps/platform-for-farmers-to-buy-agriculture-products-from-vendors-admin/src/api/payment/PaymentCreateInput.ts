import { PurchaseOrderWhereUniqueInput } from "../purchaseOrder/PurchaseOrderWhereUniqueInput";

export type PaymentCreateInput = {
  paymentStatus?: string | null;
  purchaseOrder?: PurchaseOrderWhereUniqueInput | null;
};
