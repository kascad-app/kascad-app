import { ContractType, ProfileType } from "..";

export * from "./contract.dto";

export interface ContractOffer {
  authorMail: string;
  isNew: boolean;
  type: ContractType;
  title: string;
  description: string;
  sport?: string;
  startDate: Date;
  endDate?: Date;
  riderMail: string;
  termsAndConditions?: string;
  perks?: string[];
  status: ContractStatus;
  messages: Message[];
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
