import { ProfileType } from "../profiles";

export type registerSponsorDto = {
  email: string;
  password: string;
  type: ProfileType.SPONSOR;
  companyName: string;
};

export type loginSponsorDto = {
  email: string;
  password: string;
};
