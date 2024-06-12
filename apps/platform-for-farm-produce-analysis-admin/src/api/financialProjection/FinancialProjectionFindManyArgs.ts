import { FinancialProjectionWhereInput } from "./FinancialProjectionWhereInput";
import { FinancialProjectionOrderByInput } from "./FinancialProjectionOrderByInput";

export type FinancialProjectionFindManyArgs = {
  where?: FinancialProjectionWhereInput;
  orderBy?: Array<FinancialProjectionOrderByInput>;
  skip?: number;
  take?: number;
};
