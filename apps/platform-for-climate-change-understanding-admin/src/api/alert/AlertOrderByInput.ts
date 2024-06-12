import { SortOrder } from "../../util/SortOrder";

export type AlertOrderByInput = {
  alertName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  updatedAt?: SortOrder;
};
