declare type SuccessfulResponse<T> = {
  message: string;
} & T;

declare type ErrorResponse = {
  message: string;
  error_msg: string;
};
declare type PaginatedResponse<T> = {
  [key: string]: T;
  metadata: MetaData;
};
declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;
