import { TemplateEnum } from "../enums/TemplateEnum";
import { Category } from "./category";
import { Tag } from "./tag";

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