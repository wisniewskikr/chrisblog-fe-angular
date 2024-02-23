import { TemplateEnum } from "../enums/TemplateEnum";
import { Category } from "./category-entity";
import { Tag } from "./tag-entity";

export interface Article {

    id: number;
    pageDescription: string;
    title: string;
    description: string;
    // TODO: check it
    date: string;
    author: string;
    url: string;
    content: string;
    category: Category;
    tags: Tag[];
    template: TemplateEnum;

}