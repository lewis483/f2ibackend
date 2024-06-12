import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ArticleWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
