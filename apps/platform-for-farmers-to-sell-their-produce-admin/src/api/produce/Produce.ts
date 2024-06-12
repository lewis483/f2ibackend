import { Pricing } from "../pricing/Pricing";

export type Produce = {
  createdAt: Date;
  id: string;
  name: string | null;
  pricings?: Array<Pricing>;
  quantity: number | null;
  updatedAt: Date;
};
