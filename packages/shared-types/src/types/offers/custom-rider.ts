export interface ICustomRider {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  phone: string;
  note: string;
  application: ApplicationStatus;
}

export enum ApplicationStatus {
  PENDING = "pending",
  ACCEPTED = "accepted",
  REJECTED = "rejected",
}
