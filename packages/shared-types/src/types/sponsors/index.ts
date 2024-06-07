import { Language, Profile, SocialNetwork, Sport } from "..";

export * from "./sponsor.dto";

export interface Sponsor extends Profile {
  identifier: SponsorIdentifier;
  password: string;
  identity: SponsorIdentity;
  preferences: SponsorPreferences;
  partnerships: string[];
}

export type SponsorIdentifier = {
  email: string;
  phoneNumber?: string;
};

export type SponsorIdentity = {
  companyName: string;
  website?: string;
  logo?: string;
};

export type SponsorPreferences = {
  sports: Sport[];
  languages: Language;
  networks: SocialNetwork[];
};
