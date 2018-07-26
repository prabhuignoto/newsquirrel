export interface ISearchBar {
  placeHolder: string;
  handleInput: (input: string) => void;
  handleSearch: () => void;
  searchTerm: string;
}