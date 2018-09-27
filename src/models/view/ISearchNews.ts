import { IAppMode } from './IAppState';

export default interface ISearchNews {
  term: string;
  appMode: IAppMode;
  quickViewUrl: string;
  openQuickView: boolean;
  quickViewOpen: boolean;
  loading: boolean;
  error: any;
  search: any;
  fetchMore: any;
  clearSearch: any;
  page: number;
}