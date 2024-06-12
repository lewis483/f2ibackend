import { ConsumerWhereInput } from "./ConsumerWhereInput";
import { ConsumerOrderByInput } from "./ConsumerOrderByInput";

export type ConsumerFindManyArgs = {
  where?: ConsumerWhereInput;
  orderBy?: Array<ConsumerOrderByInput>;
  skip?: number;
  take?: number;
};
