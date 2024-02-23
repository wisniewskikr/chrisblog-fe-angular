import { HomeEnum } from "../enums/home-enum";
import { PaginationModel } from "./pagination-model";

export class BlogModel extends PaginationModel {

    selectedCategory: string = HomeEnum.HOME;
    selectedTag: number|null = null;
    searchText: string|null = null;

    public getSelectedCategory(): string {
        return this.selectedCategory;
    }

    public setSelectedCategory(selectedCategory: string): void {
        this.selectedCategory = selectedCategory;
    }

    public getSelectedTag(): number|null {
        return this.selectedTag;
    }

    public setSelectedTag(selectedTag: number|null): void {
        this.selectedTag = selectedTag;
    }

    public getSearchText(): string|null {
        return this.searchText;
    }

    public setSearchText(searchText: string|null): void {
        this.searchText = searchText;
    }

}