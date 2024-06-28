import { ProfileType } from "../profiles";
import { GenderIdentity } from "..";

export type registerRiderDto = {
	email: string;
	password: string;
	birthDate: Date;
	firstName: string;
	lastName: string;
	type: ProfileType.RIDER;
	gender: GenderIdentity;
};

export type loginRiderDto = {
	email: string;
	password: string;
	type: ProfileType.RIDER;
};
