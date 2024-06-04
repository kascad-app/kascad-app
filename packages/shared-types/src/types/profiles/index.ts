import { Base } from "..";

export interface Profile extends Base {
  type: ProfileType;
  displayName: string;
  description?: string;
  avatarUrl?: string;
  role: ProfileRole;
  status: profileStatus;
  verified: boolean;
  isAvailable: boolean;
}

type profileStatus = {
  status: AccountStatus;
  reason?: string;
  since?: Date;
  onboardingCompleted: boolean;
};

export enum AccountStatus {
  ACTIVE = "active",
  DISABLED = "disabled",
  SUSPENDED = "suspended",
}

export enum ProfileRole {
  ADMIN = 2,
  USER = 1,
}

export enum ProfileType {
  RIDER = "rider",
  SPONSOR = "sponsor",
}
