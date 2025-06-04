import { ContractOffer, ContractStatus, ContractType, ProfileType } from "..";

export interface contractOfferDto extends ContractOffer {
  _id: string;
  sponsorAvatar: string;
  sponsorName: string;
  riderAvatar?: string;
  riderFullName: string;
}

export type registerContractDto = {
  sponsorMail: string;
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
