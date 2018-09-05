import { IAppMode } from './IAppState';

export default interface ISearchNews {
  term: string;
  appMode: IAppMode;
}