import { Skill as TSkill } from "../api/skill/Skill";

export const SKILL_TITLE_FIELD = "name";

export const SkillTitle = (record: TSkill): string => {
  return record.name || String(record.id);
};
