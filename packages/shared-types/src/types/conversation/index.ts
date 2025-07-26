import { Types } from "mongoose";
import { ProfileType } from "../profiles";

export enum ConversationType {
  JOB_OFFER = "job-offer",
  PRIVATE = "private",
}

export enum ConversationStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  DELETED = "deleted",
}

export type Participant = {
  userId: Types.ObjectId;
  userType: ProfileType;
};

export interface IConversation {
  _id: string;
  participants: Array<{
    userId: Types.ObjectId;
    userType: ProfileType;
  }>;
  context?: {
    type: ConversationType;
    referenceId?: string;
  };
  status: ConversationStatus;
  createdAt: Date;
  updatedAt: Date;
}
