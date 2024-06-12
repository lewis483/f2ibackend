import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CartWhereInput = {
  id?: StringFilter;
  items?: JsonFilter;
};
