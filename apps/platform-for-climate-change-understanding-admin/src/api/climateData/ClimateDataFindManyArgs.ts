import { ClimateDataWhereInput } from "./ClimateDataWhereInput";
import { ClimateDataOrderByInput } from "./ClimateDataOrderByInput";

export type ClimateDataFindManyArgs = {
  where?: ClimateDataWhereInput;
  orderBy?: Array<ClimateDataOrderByInput>;
  skip?: number;
  take?: number;
};
