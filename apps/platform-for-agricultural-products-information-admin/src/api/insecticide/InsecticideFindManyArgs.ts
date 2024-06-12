import { InsecticideWhereInput } from "./InsecticideWhereInput";
import { InsecticideOrderByInput } from "./InsecticideOrderByInput";

export type InsecticideFindManyArgs = {
  where?: InsecticideWhereInput;
  orderBy?: Array<InsecticideOrderByInput>;
  skip?: number;
  take?: number;
};
