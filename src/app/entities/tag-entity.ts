import { Article } from "./article-entity";

export interface Tag {

    id: number;
    name: string;
    articles: Article[];

}