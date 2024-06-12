import { SortOrder } from "../../util/SortOrder";

export type FarmLocationOrderByInput = {
  coordinates?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  locationName?: SortOrder;
  updatedAt?: SortOrder;
};
