import { AxiosResponse } from 'axios';
export interface ISearchResults {
  totalResults: number;
  hasResults: boolean;
  failureResponse?: AxiosResponse | null;
}