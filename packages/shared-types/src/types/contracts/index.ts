import { ContractType, ProfileType } from "..";

export * from "./contract.dto";

export interface ContractOffer {
  sponsorMail: string;
  isNew: boolean;
  type: ContractType;
  title: string;
  description: string;
  location?: string;
  sport?: string;
  startDate: Date;
  endDate?: Date;
  riderMail: string;
  termsAndConditions?: string;
  perks?: string[];
  status: ContractStatus;
  messages: Message[];
  isOpenByRider: boolean; // Indique si le rider à ouvert la derniere notification du contrat, cette propriété est mise à jour à chaque envoi d'un message par un sponsor, et à chaque ouverture du contrat par le rider
  isOpenBySponsor: boolean; // Indique si le sponsor à ouvert la derniere notification du contrat, cette propriété est mise à jour à chaque envoi d'un message par un rider, et à chaque ouverture du contrat par le sponsor
}

export interface Message {
  authorType: ProfileType;
  authorMail: string;
  content: string;
}

export enum ContractStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  CANCELLED = "CANCELLED",
  EXPIRED = "EXPIRED",
  COMPLETED = "COMPLETED",
}
