import { IFilter as IFilterData } from '../data/IFilter';
import { IFilter } from './IFilter';

export interface IFilters {
  items: IFilter[];
  selectFilter: (filter: IFilterData) => void;
}