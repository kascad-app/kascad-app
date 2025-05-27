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

export type getRiderDto = {
  identifier: RiderIdentifier;
  password: string;
  identity: RiderIdentity;
  preferences: RiderPreferences;
  performanceSummary: PerformanceSummary;
  trainingFrequency: TrainingFrequency;
  sponsorSummary: SponsorSummary;
  images: Image[];
  nonCompetitionAwards: NonCompetitionAward[];
  availibility: Availibility;
  views: getViewsDto;
};

export type getViewsDto = {
  lastMonthViews: number;
  weeklyViews: number;
  monthlyViews: number;
  viewEntries: getEntryDto[];
};

export type getEntryDto = {
  idUser: string;
  timestamp: Date;
};

export type loginRiderDto = {
  email: string;
  password: string;
};
