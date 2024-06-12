import { UsageGuideline as TUsageGuideline } from "../api/usageGuideline/UsageGuideline";

export const USAGEGUIDELINE_TITLE_FIELD = "guidelineTitle";

export const UsageGuidelineTitle = (record: TUsageGuideline): string => {
  return record.guidelineTitle?.toString() || String(record.id);
};
