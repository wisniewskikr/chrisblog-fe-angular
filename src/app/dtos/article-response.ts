import { ArticleEntity } from "../entities/article-entity";

export interface ArticleResponse {

    articles: ArticleEntity[];
    pages: number[];
    disablePrevious: boolean; 
    disableNext: boolean;    

}