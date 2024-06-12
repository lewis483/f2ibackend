import { FarmProduceWhereInput } from "./FarmProduceWhereInput";
import { FarmProduceOrderByInput } from "./FarmProduceOrderByInput";

export type FarmProduceFindManyArgs = {
  where?: FarmProduceWhereInput;
  orderBy?: Array<FarmProduceOrderByInput>;
  skip?: number;
  take?: number;
};
