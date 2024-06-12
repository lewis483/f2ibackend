import { EggBatchWhereInput } from "./EggBatchWhereInput";
import { EggBatchOrderByInput } from "./EggBatchOrderByInput";

export type EggBatchFindManyArgs = {
  where?: EggBatchWhereInput;
  orderBy?: Array<EggBatchOrderByInput>;
  skip?: number;
  take?: number;
};
