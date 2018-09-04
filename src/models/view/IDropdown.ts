import { IDropdownItem } from './IDropdown';

export interface IDropdownItem {
  name: string;
  value: string;
  onSelect: (value: string) => void;
  icon: string;
}

export interface IDropdown {
  selectedItem: string;
  items: IDropdownItem[];
  onClick: () => void;
  onSelect?: (value: string) => void;
  show: boolean;
  label: string;
}