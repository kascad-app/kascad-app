export type registerRiderDto = {
  email: string;
  password: string;
  birthDate: Date;
  firstName: string;
  lastName: string;
};

export type loginRiderDto = {
  email: string;
  password: string;
};
