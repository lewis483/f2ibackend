import { PurchaseOrderWhereUniqueInput } from "../purchaseOrder/PurchaseOrderWhereUniqueInput";

export type PaymentUpdateInput = {
  paymentStatus?: string | null;
  purchaseOrder?: PurchaseOrderWhereUniqueInput | null;
};
