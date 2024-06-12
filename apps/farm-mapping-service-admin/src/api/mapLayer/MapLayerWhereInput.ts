import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MapLayerWhereInput = {
  id?: StringFilter;
  layerDetails?: StringNullableFilter;
  layerName?: StringNullableFilter;
};
