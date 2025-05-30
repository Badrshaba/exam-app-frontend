declare type DatabaseFields = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};
declare type MetaData = {
  currentPage: number;
  limit: number;
  totalPages: number;
  totalItems: number;
};

declare type SearchParams = { [key: string]: string | string[] | undefined };
