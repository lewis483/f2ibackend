import { Order } from "../order/Order";

export type Payment = {
  createdAt: Date;
  id: string;
  order?: Order | null;
  paymentStatus: string | null;
  updatedAt: Date;
};
