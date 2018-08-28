import ToggleSelectSize from "../../enums/toggleSelectSize";

export interface IToggleItem {
  name: string;
  value: string;
  onToggle: (name: string) => void;
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
}