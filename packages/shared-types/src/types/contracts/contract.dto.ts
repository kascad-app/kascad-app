import { ContractStatus, ContractType, Message } from "..";

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
  messages: Message[];
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
  authorMail: string;
  authroAvatar?: string;
  authorName?: string;
  content: string;
  createdAt: Date;
};

export type registerMessageDto = {
  content: string;
};
