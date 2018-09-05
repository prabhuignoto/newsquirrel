import { IAppMode } from './IAppState';

export default interface ISearchNews {
  term: string;
  appMode: IAppMode;
  quickViewUrl: string;
  openQuickView: boolean;
  quickViewOpen: boolean;
}