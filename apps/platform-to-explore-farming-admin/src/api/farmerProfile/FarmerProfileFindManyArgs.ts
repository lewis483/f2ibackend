import { FarmerProfileWhereInput } from "./FarmerProfileWhereInput";
import { FarmerProfileOrderByInput } from "./FarmerProfileOrderByInput";

export type FarmerProfileFindManyArgs = {
  where?: FarmerProfileWhereInput;
  orderBy?: Array<FarmerProfileOrderByInput>;
  skip?: number;
  take?: number;
};
