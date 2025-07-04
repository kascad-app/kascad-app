export * from "./profiles";
export * from "./riders";
export * from "./sponsors";
export * from "./articles";
export * from "./contracts";

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
  MALE = "homme",
  FEMALE = "femme",
  OTHER = "autre",
}

export type Sport = {
  name: SportName;
  description?: string;
};

export enum SportName {
  CYCLING = "Cyclisme",
  MOUNTAIN_BIKING = "VTT",
  ROAD_CYCLING = "Cyclisme sur route",
  BMX = "BMX",
  SKATEBOARDING = "Skateboard",
  LONGBOARDING = "Longboard",
  SURFING = "Surf",
  SNOWBOARDING = "Snowboard",
  SKIING = "Ski",
  MOTOCROSS = "Motocross",
  ENDURO = "Enduro",
  DOWNHILL_BIKING = "VTT de descente",
  FREERIDE = "Freeride",
  SCOOTER = "Trottinette",
  ROLLER_SKATING = "Roller",
  WAKEBOARDING = "Wakeboard",
  KITESURFING = "Kitesurf",
  WINDSURFING = "Planche à voile",
  PADDLEBOARDING = "Stand up paddle",
}

export enum ContractType {
  UGC = "Contrat UGC",
  AMBASSADOR = "Contrat d'ambassadeur",
  PRODUCT_PLACEMENT = "Contrat de placement de produit",
  AFFILIATION = "Contrat d'affiliation",
}

export type TempImage = {
  file: File;
  preview: string;
};
