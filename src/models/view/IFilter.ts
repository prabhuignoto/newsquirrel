import { IFilter } from '../data/IFilter';

export interface IFilter {
  name: string;
  value: string;
  selectFilter?: (filter: IFilter) => void;
  selected: boolean;
};