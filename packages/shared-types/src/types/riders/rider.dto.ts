import {
  Availibility,
  GenderIdentity,
  Image,
  NonCompetitionAward,
  PerformanceSummary,
  RiderIdentifier,
  RiderIdentity,
  RiderPreferences,
  SponsorSummary,
  TrainingFrequency,
  View,
} from "..";

export type registerRiderDto = {
  email: string;
  password: string;
  birthDate: Date;
  firstName: string;
  lastName: string;
  gender: GenderIdentity;
};

export type loginRiderDto = {
  email: string;
  password: string;
};
