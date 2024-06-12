import { PoultryWhereInput } from "./PoultryWhereInput";
import { PoultryOrderByInput } from "./PoultryOrderByInput";

export type PoultryFindManyArgs = {
  where?: PoultryWhereInput;
  orderBy?: Array<PoultryOrderByInput>;
  skip?: number;
  take?: number;
};
