import { PesticideWhereInput } from "./PesticideWhereInput";
import { PesticideOrderByInput } from "./PesticideOrderByInput";

export type PesticideFindManyArgs = {
  where?: PesticideWhereInput;
  orderBy?: Array<PesticideOrderByInput>;
  skip?: number;
  take?: number;
};
