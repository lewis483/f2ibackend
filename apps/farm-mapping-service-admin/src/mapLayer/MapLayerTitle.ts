import { MapLayer as TMapLayer } from "../api/mapLayer/MapLayer";

export const MAPLAYER_TITLE_FIELD = "layerName";

export const MapLayerTitle = (record: TMapLayer): string => {
  return record.layerName?.toString() || String(record.id);
};
