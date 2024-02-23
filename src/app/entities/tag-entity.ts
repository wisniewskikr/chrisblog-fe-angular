import { ArticleEntity } from "./article-entity";

export interface TagEntity {

    id: number;
    name: string;
    articles: ArticleEntity[];

}