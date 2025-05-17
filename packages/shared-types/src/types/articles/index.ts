import { Base } from "..";

export * from "./article.dto";

export interface Article extends Base {
  title: string;
  urlImage: string;
  excerpt?: string;
  content: string;
  description: string;
}
