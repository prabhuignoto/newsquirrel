export interface ISearchBar {
  placeHolder: string;
  handleInput: (input: string) => void;
  handleSearch: () => void;
  handleClear: () => void;
  searchTerm: string;
}