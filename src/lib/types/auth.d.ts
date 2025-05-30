declare type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

declare type LoginResponse = {
  message: "success";
  token: string;
  user: User;
};
