import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CropYieldPredictionWhereInput = {
  cropName?: StringNullableFilter;
  id?: StringFilter;
  yieldPrediction?: StringNullableFilter;
};
