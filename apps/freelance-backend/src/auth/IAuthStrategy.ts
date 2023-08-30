import { User1Info } from "./User1Info";

export interface IAuthStrategy {
  validate: (...any: any) => Promise<User1Info>;
}
