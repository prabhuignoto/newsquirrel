import { FormEvent } from "react";

export interface ISearchBox {
  onSearch: () => void;
  onInput: () => void;
  onGo: (value: string) => void;
  clearField: (ev: KeyboardEvent & FormEvent<HTMLInputElement) => void;
  value: string;
}