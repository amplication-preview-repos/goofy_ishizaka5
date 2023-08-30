import { User1CreateNestedManyWithoutSkillsInput } from "./User1CreateNestedManyWithoutSkillsInput";

export type SkillCreateInput = {
  description?: string | null;
  name: string;
  users?: User1CreateNestedManyWithoutSkillsInput;
};
