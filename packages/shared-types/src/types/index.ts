export * from "./profiles";
export * from "./riders";
export * from "./sponsors";

export type Base = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
};

export enum Language {
  FR,
  EN,
}

export enum SocialNetwork {
  FACEBOOK = "facebook",
  TWITTER = "twitter",
  INSTAGRAM = "instagram",
  LINKEDIN = "linkedin",
  YOUTUBE = "youtube",
  TIKTOK = "tiktok",
  SNAPCHAT = "snapchat",
  WHATSAPP = "whatsapp",
  TELEGRAM = "telegram",
  DISCORD = "discord",
  TWITCH = "twitch",
  GITHUB = "github",
  STRAVA = "strava",
}

export enum GenderIdentity {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

export type Sport = {
  name: string;
  description: string;
};
