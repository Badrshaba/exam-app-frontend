declare type SuccessfulResponse<T> = {
  message: string;
} & T;

declare type ErrorResponse = {
  message: string;
  code: string;
};
declare type PaginatedResponse<T> = {
  [key: string]: T;
  metadata: MetaData;
};
declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;

declare type DatabaseProperties = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};
