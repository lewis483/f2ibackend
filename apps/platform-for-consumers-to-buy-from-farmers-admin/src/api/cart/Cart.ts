import { JsonValue } from "type-fest";

export type Cart = {
  createdAt: Date;
  id: string;
  items: JsonValue;
  updatedAt: Date;
};
