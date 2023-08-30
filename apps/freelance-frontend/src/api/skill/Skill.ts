import { User1 } from "../user1/User1";

export type Skill = {
  description: string | null;
  id: number;
  name: string;
  users?: Array<User1>;
};
