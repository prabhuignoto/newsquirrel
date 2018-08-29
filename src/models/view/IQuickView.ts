export interface IQuickView {
  title: string;
  description: string;
  site: string;
  date: string;
  thumbnailURL: string;
  logoURL: string;
  closeQuickView?: () => void;
  open?: boolean;
  url: string;
  actvCardUrl?: string;
  quickViewLoading?: boolean;
}