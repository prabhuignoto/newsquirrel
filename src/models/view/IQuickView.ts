export interface IQuickView {
  closeQuickView?: () => void;
  open?: boolean;
  actvCardUrl?: string;
  quickViewUrl: string;
}