import { ContractType } from "..";

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
  perks?: string[];
};

export type sendMessageDto = {
  content: string;
};
