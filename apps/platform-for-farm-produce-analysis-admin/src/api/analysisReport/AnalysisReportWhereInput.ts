import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AnalysisReportWhereInput = {
  findings?: StringNullableFilter;
  id?: StringFilter;
  reportName?: StringNullableFilter;
};
