import { FarmLocationWhereInput } from "./FarmLocationWhereInput";
import { FarmLocationOrderByInput } from "./FarmLocationOrderByInput";

export type FarmLocationFindManyArgs = {
  where?: FarmLocationWhereInput;
  orderBy?: Array<FarmLocationOrderByInput>;
  skip?: number;
  take?: number;
};
