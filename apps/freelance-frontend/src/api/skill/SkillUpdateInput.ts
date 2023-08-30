import { User1UpdateManyWithoutSkillsInput } from "./User1UpdateManyWithoutSkillsInput";

export type SkillUpdateInput = {
  description?: string | null;
  name?: string;
  users?: User1UpdateManyWithoutSkillsInput;
};
