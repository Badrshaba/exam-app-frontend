declare type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

declare type LoginResponse = {
  success: boolean;
  token: string;
  user: User;
};
