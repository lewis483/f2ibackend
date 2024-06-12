import { Payment } from "../payment/Payment";

export type PurchaseOrder = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  payments?: Array<Payment>;
  totalAmount: number | null;
  updatedAt: Date;
};
