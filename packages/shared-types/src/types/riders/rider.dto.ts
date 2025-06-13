import { GenderIdentity, Rider } from "..";

export type registerRiderDto = {
  email: string;
  password: string;
  birthDate: Date;
  firstName: string;
  lastName: string;
  gender: GenderIdentity;
};

export type loginRiderDto = {
  email: string;
  password: string;
};

export type updateRiderDto = Omit<Rider, "images" | "identifier"> & {
  identifier: RiderIdentifierDto;
  images: ImageDto[];
};

export type RiderIdentifierDto = {
  phoneNumber?: string;
  username?: string;
};

export type ImageDto = {
  url: string;
  alt?: string;
  isToDelete?: boolean;
  uploadDate: Date;
};
