import { GenderIdentity, Language, Profile, SocialNetwork, Sport } from "..";

export interface Rider extends Profile {
  identifier: RiderIdentifier;
  password: string;
  identity: RiderIdentity;
  preferences: RiderPreferences;
  partnerships: string[];
}

export type RiderIdentifier = {
  email: string;
  phoneNumber?: string;
  username?: string;
};

export type RiderIdentity = {
  firstName: string;
  lastName: string;
  fullName: string;
  gender: GenderIdentity;
  birthDate: Date;
};

export type RiderPreferences = {
  sports: Sport[];
  languages: Language;
  networks: SocialNetwork[];
};
