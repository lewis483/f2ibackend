import { RestockWhereInput } from "./RestockWhereInput";
import { RestockOrderByInput } from "./RestockOrderByInput";

export type RestockFindManyArgs = {
  where?: RestockWhereInput;
  orderBy?: Array<RestockOrderByInput>;
  skip?: number;
  take?: number;
};
