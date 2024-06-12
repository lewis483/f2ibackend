import { AgriculturalProductWhereInput } from "./AgriculturalProductWhereInput";
import { AgriculturalProductOrderByInput } from "./AgriculturalProductOrderByInput";

export type AgriculturalProductFindManyArgs = {
  where?: AgriculturalProductWhereInput;
  orderBy?: Array<AgriculturalProductOrderByInput>;
  skip?: number;
  take?: number;
};
