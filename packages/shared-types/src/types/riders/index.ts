import { Profile, GenderIdentity, Language, Sport, SocialNetwork, ContractType } from "..";

import { WeatherCondition } from "../../generics";

export * from "./rider.dto";

export interface Rider extends Profile {
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
}

export type RiderIdentifier = {
  email: string;
  phoneNumber?: string;
  username?: string;
};

export type RiderIdentity = {
  firstName: string;
  lastName: string;
  fullName?: string;
  gender: GenderIdentity;
  birthDate: Date;
  country: string;
  languageSpoken: string[];
  city: string;
  practiceLocation: string;
};

export type RiderPreferences = {
  sports: Sport[];
  languages: Language;
  networks: SocialNetwork[];
};

export type Performance = {
  startDate: Date;
  endDate: Date;
  eventName: string;
  category: string;
  ranking?: number;
  location: {
    country: string;
    city: string;
  };
  weather: WeatherCondition;
  notes?: string;
};

export type TricksVideo = {
  url: string;
  title: string;
  description?: string;
  uploadDate: Date;
  relatedPerformance?: Performance;
};

export type TrainingFrequency = {
  sessionsPerWeek: number;
  hoursPerSession: number;
};

export type Image = {
  url: string;
  alt?: string;
  uploadDate: Date;
};

export type NonCompetitionAward = {
  date: Date;
  title: string;
  description: string;
  source: string;
};

export type SponsorSummary = {
  totalSponsors: number;
  wishListSponsors: string[];
  currentSponsors: string[];
};

export type PerformanceSummary = {
  totalPodiums: number;
  performances: Performance[];
  performanceVideos: TricksVideo[];
};

export type Availibility = {
  isAvailable: boolean;
  contractType: ContractType;
}