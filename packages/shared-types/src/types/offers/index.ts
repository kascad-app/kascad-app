import { Types } from "mongoose";

import { ContractType, SportName } from "../..";

export * from "./custom-rider";

export enum OfferStatus {
  DRAFT = "draft",
  ACTIVE = "active",
  PAUSED = "paused",
  EXPIRED = "expired",
  CLOSED = "closed",
  DELETED = "deleted",
}

export enum Currency {
  EUR = "EUR",
  USD = "USD",
  GBP = "GBP",
}

export interface IOffer {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  contractType: ContractType;
  sports: SportName[];
  sponsorId: Types.ObjectId;
  status: OfferStatus;
  budgetMin?: number;
  budgetMax?: number;
  currency?: Currency;
}

export interface IOffersDashboard {
  _id: string;
  title: string;
  description: string;
  contractType: ContractType;
  sports: SportName[];
  status: OfferStatus;
  riders: {
    avatar: string;
    _id: string;
  };
  newApplications: number;
}

export interface IOffersRider {
  _id: string;
  title: string;
  description: string;
  contractType: ContractType;
  createdAt: Date;
  updatedAt: Date;
  budgetMin?: number;
  budgetMax?: number;
  currency?: Currency;
  sports: SportName[];
  status: OfferStatus;
  sponsor: {
    _id: string;
    avatarUrl: string | null;
    companyName: string;
  };
}
