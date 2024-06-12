import { SortOrder } from "../../util/SortOrder";

export type AnalysisReportOrderByInput = {
  createdAt?: SortOrder;
  findings?: SortOrder;
  id?: SortOrder;
  reportName?: SortOrder;
  updatedAt?: SortOrder;
};
