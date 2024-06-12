import { AnalysisReport as TAnalysisReport } from "../api/analysisReport/AnalysisReport";

export const ANALYSISREPORT_TITLE_FIELD = "reportName";

export const AnalysisReportTitle = (record: TAnalysisReport): string => {
  return record.reportName?.toString() || String(record.id);
};
