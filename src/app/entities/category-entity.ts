import { Article } from "./article-entity";

export interface Category {

    id: number;
    name: string;
    articles: Article[];

}