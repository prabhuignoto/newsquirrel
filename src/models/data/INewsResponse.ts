import { IArticle } from './IArticle';
export interface INewsResponse {
  status: string;
  totalResults: number;
  articles: IArticle[]
}