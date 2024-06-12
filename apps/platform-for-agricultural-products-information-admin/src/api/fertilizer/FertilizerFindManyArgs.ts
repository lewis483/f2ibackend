import { FertilizerWhereInput } from "./FertilizerWhereInput";
import { FertilizerOrderByInput } from "./FertilizerOrderByInput";

export type FertilizerFindManyArgs = {
  where?: FertilizerWhereInput;
  orderBy?: Array<FertilizerOrderByInput>;
  skip?: number;
  take?: number;
};
