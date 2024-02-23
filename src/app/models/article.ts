import { Category } from "./category";

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
    // TODO
    // TemplateEnum 
    // Set<TagEntity> tag

}