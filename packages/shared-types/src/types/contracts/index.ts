import { ContractType } from "..";

export * from "./contract.dto";

export interface ContractOffer {
  authorMail: string;
  authorName: string;
  isNew: boolean;
  type: ContractType;
  title: string;
  description: string;
  sport?: string;
  startDate: Date;
  endDate?: Date;
  riderMail: string;
  riderFullName: string;
  termsAndConditions?: string;
  perks?: string[];
}
