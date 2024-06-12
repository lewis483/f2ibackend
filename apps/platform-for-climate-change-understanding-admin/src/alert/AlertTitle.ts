import { Alert as TAlert } from "../api/alert/Alert";

export const ALERT_TITLE_FIELD = "alertName";

export const AlertTitle = (record: TAlert): string => {
  return record.alertName?.toString() || String(record.id);
};
