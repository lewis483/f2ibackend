import { Produce } from "../produce/Produce";

export type Pricing = {
  createdAt: Date;
  id: string;
  pricePerUnit: number | null;
  produce?: Produce | null;
  updatedAt: Date;
};
