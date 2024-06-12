import { ProduceInfoWhereInput } from "./ProduceInfoWhereInput";
import { ProduceInfoOrderByInput } from "./ProduceInfoOrderByInput";

export type ProduceInfoFindManyArgs = {
  where?: ProduceInfoWhereInput;
  orderBy?: Array<ProduceInfoOrderByInput>;
  skip?: number;
  take?: number;
};
