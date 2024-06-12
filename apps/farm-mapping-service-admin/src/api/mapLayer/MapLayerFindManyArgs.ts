import { MapLayerWhereInput } from "./MapLayerWhereInput";
import { MapLayerOrderByInput } from "./MapLayerOrderByInput";

export type MapLayerFindManyArgs = {
  where?: MapLayerWhereInput;
  orderBy?: Array<MapLayerOrderByInput>;
  skip?: number;
  take?: number;
};
