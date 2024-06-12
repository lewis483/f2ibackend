import { SortOrder } from "../../util/SortOrder";

export type MapLayerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  layerDetails?: SortOrder;
  layerName?: SortOrder;
  updatedAt?: SortOrder;
};
