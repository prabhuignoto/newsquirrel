import LoaderSize from "../../enums/loaderSize";

export interface ILoader {
  start: boolean;
  stop: boolean;
  size: LoaderSize;
}