export interface IQuickView {
  url: string | undefined;
  onClose?: () => void;
  onLoadComplete: () => void;
  quickViewLoading: boolean;
  onError: () => void;
}