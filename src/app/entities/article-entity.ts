import { TemplateEnum } from "../enums/template-enum";
import { CategoryEntity } from "./category-entity";
import { TagEntity } from "./tag-entity";

export interface ArticleEntity {

    id: number;
    pageDescription: string;
    title: string;
    description: string;
    // TODO: check it
    date: string;
    author: string;
    url: string;
    content: string;
    category: CategoryEntity;
    tags: TagEntity[];
    template: TemplateEnum;

}