import { Poultry as TPoultry } from "../api/poultry/Poultry";

export const POULTRY_TITLE_FIELD = "name";

export const PoultryTitle = (record: TPoultry): string => {
  return record.name?.toString() || String(record.id);
};
