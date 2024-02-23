import { Article } from "./article";

export interface Tag {

    id: number;
    name: string;
    articles: Article[];

}