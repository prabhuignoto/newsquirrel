export interface IPager {
  activePage: number;
  onPrevious: () => void;
  onNext: () => void;
  disableNext: boolean;
  disablePrevious: boolean;
}