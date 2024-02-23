import { ArticleEntity } from "./article-entity";

export interface CategoryEntity {

    id: number;
    name: string;
    articles: ArticleEntity[];

}