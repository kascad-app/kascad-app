import { Profile, GenderIdentity, Language, Sport, SocialNetwork } from "..";

import { WeatherCondition } from "../../generics";

export * from "./rider.dto";

export interface Rider extends Profile {
  identifier: RiderIdentifier;
  password: string;
  identity: RiderIdentity;
  preferences: RiderPreferences;
  partnerships: string[];
  performances: Performance[];
  performanceVideos: TricksVideo[];
  trainingFrequency: TrainingFrequency;
  currentSponsors: string[];
  // socialMediaEngagement: SocialMediaEngagement;
  nonCompetitionAwards: NonCompetitionAward[];
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

// export type SocialMediaEngagement = {
//   [key in SocialNetwork]: {
//     followers: number;
//     engagementRate: number;
//   };
// };

export type NonCompetitionAward = {
  date: Date;
  title: string;
  description: string;
  source: string;
};
