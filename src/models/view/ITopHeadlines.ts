import NewsStandSize from "../../enums/newsStandSize";
import { IAppMode } from "./IAppState";

export default interface ITopHeadlines {
  appMode: IAppMode;
  searchTerm: string;
  category: string;
  country: string;
  newstandSize: NewsStandSize;
  quickView: {
    url: string;
    isOpen: boolean;
  }
}