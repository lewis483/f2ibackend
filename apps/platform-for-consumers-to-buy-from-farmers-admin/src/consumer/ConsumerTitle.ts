import { Consumer as TConsumer } from "../api/consumer/Consumer";

export const CONSUMER_TITLE_FIELD = "name";

export const ConsumerTitle = (record: TConsumer): string => {
  return record.name?.toString() || String(record.id);
};
