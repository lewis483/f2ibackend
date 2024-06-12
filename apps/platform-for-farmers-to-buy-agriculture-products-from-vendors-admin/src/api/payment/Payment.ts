import { PurchaseOrder } from "../purchaseOrder/PurchaseOrder";

export type Payment = {
  createdAt: Date;
  id: string;
  paymentStatus: string | null;
  purchaseOrder?: PurchaseOrder | null;
  updatedAt: Date;
};
