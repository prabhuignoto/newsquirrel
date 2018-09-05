import { IAppMode } from "./IAppState";

export default interface ITopHeadlines {
  appMode: IAppMode;
  searchTerm: string;
}