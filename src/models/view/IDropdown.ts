import { IDropdownItem } from './IDropdown';

export interface IDropdownItem {
  name: string;
  code: string;
  onSelect: (name: string, code: string) => void;
  icon: string;
}

export interface IDropdown {
  selectedItem: string;
  items: IDropdownItem[];
  onClick: () => void;
  onSelect: (name: string, code: string) => void;
  show: boolean;
  label: string;
  update: (data: any) => void;
}