import { IFilter } from './IFilter';

export interface IFilters {
  items: IFilter[];
  update: (data: any) => void;
}