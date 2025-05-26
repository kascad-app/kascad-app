import { ContractStatus, ContractType, Message, ProfileType } from "..";

export type getContractsDto = {
  authorMail: string;
  authorAvatar: string;
  authorName: string;
  isNew: boolean;
  type: ContractType;
  title: string;
  description: string;
  sport?: string;
  startDate: Date;
  endDate?: Date;
  riderMail: string;
  riderAvatar?: string;
  riderFullName: string;
  termsAndConditions?: string;
  perks?: string[];
  status: ContractStatus;
  messages: getMessagesDto[];
};

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

export type getMessagesDto = {
  authorType: ProfileType;
  authorMail: string;
  content: string;
  createdAt: Date;
};

export type registerMessageDto = {
  content: string;
};
