import { Base } from "..";

export interface Article extends Base {
  title: string;
  urlImage: string;
  excerpt: string;
  content: string;
  description: string;
}