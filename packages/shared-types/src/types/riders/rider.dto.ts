import { ProfileType } from "../profiles";

export type registerRiderDto = {
  email: string;
  password: string;
  birthDate: Date;
  firstName: string;
  lastName: string;
  type: ProfileType.RIDER;
  gender: string;
};

export type loginRiderDto = {
  email: string;
  password: string;
  type: ProfileType.RIDER;
};
