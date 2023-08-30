import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { User1ListRelationFilter } from "../user1/User1ListRelationFilter";

export type SkillWhereInput = {
  description?: StringNullableFilter;
  id?: IntFilter;
  name?: StringFilter;
  users?: User1ListRelationFilter;
};
