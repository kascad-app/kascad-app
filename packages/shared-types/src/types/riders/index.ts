import {
  Profile,
  GenderIdentity,
  Language,
  Sport,
  SocialNetwork,
  ContractType,
} from "..";

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
  videos: OnlineVideo[];
  images: Image[];
  nonCompetitionAwards: NonCompetitionAward[];
  availibility: Availibility;
}

export interface RiderMe extends Rider {
  views: View;
  tempViewsStats: TempViewsStats;
}

export type TempViewsStats = {
  monthlyViews: number;
  weeklyViews: number;
};

export type View = {
  lastMonthViews: number;
  viewEntries: ViewEntry[];
};

export type ViewEntry = {
  idUser: string;
  timestamp: Date;
};

export type RiderIdentifier = {
  email: string;
  slug: string;
  phoneNumber?: string;
  username?: string;
  strava: Strava;
};

export type Strava = {
  isLinked: boolean;
  identifier?: StravaIdentifier;
};

export type StravaIdentifier = {
  token_type: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  access_token: string;
  athlete: string;
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
  bio?: string;
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

export type OnlineVideo = {
  url: string;
  title: string;
  description?: string;
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
};

export type Availibility = {
  isAvailable: boolean;
  contractType: ContractType;
};
