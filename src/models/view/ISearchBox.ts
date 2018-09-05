export interface ISearchBox {
  onSearch: (ev: any) => void;
  onInput: (ev: any) => void;
  clearField: (ev: any) => void;
  onRef: (ref: any) => void;
  value: string;
}