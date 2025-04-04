import { ProfileType } from "../profiles";

export type registerSponsorDto = {
  email: string;
  password: string;
  companyName: string;
};

export type loginSponsorDto = {
  email: string;
  password: string;
};
