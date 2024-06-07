import { ProfileRole } from "../profiles";

export type registerSponsorDto = {
  email: string;
  password: string;
  type: ProfileRole;
  companyName: string;
};

export type loginSponsorDto = {
  email: string;
  password: string;
};
