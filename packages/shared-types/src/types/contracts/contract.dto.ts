import { ContractStatus, ContractType } from "..";

export type registerContractDto = {
  authorMail: string;
  type: ContractType;
  title: string;
  description: string;
  sport?: string;
  startDate: Date;
  endDate?: Date;
  riderMail: string;
  termsAndConditions?: string;
  status: ContractStatus;
  perks?: string[];
};

export type messagePayloadDto = {
  content: string;
};

export type registerMessageDto = {
  authorMail: string;
  authorName?: string;
  content: string;
};
