import ToggleSelectSize from "../../enums/toggleSelectSize";

export interface IToggleItem {
  name: string;
  value: string;
  onClick: (name: string, value: number) => void;
  selected: boolean;
  size: ToggleSelectSize;
  theme: string;
}

export interface IToggleSelect {
  label: string;
  items: IToggleItem[];
  size: ToggleSelectSize;
  onToggle: (name: string) => void;
  theme: string;
  type?: ToggleType;
  update: (variables: any) => void;
}

export enum ToggleType {
  APP_MODE = 1,
  SORT_ARTICLES = 2,
  RESIZER = 3,
}