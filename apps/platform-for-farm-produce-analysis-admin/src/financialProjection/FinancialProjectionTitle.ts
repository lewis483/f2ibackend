import { FinancialProjection as TFinancialProjection } from "../api/financialProjection/FinancialProjection";

export const FINANCIALPROJECTION_TITLE_FIELD = "projectionName";

export const FinancialProjectionTitle = (
  record: TFinancialProjection
): string => {
  return record.projectionName?.toString() || String(record.id);
};
