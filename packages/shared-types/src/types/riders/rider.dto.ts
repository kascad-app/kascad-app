import { ProfileRole } from "../profiles";

export type registerRiderDto = {
  email: string;
  password: string;
  birthDate: Date;
  firstName: string;
  lastName: string;
  type: ProfileRole;
};

export type loginRiderDto = {
  email: string;
  password: string;
};