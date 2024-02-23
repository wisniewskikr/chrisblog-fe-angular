import { SortingEnum } from "../enums/sorting-enum";

export class PaginationModel {

    private pages: number[] = [];    
    private currentPage: number = 1;    
    private disabledPrevious: boolean = false;
    private disableNext: boolean = false;
    private selectedSorting: string = SortingEnum.DATE_DECREASING.value;

    public getPages(): number[] {
        return this.pages;
    }

    public setPages(pages: number[]): void {
        this.pages = pages;
    }

    public getCurrentPage(): number {
        return this.currentPage;
    }

    public setCurrentPage(currentPage: number): void {
        this.currentPage = currentPage;
    }

    public isDisabledPrevious(): boolean {
        return this.disabledPrevious;
    }

    public setDisabledPrevious(disabledPrevious: boolean): void {
        this.disabledPrevious = disabledPrevious;
    }

    public isDisableNext(): boolean {
        return this.disableNext;
    }

    public setDisableNext(disableNext: boolean): void {
        this.disableNext = disableNext;
    }

    public getSelectedSorting(): string {
        return this.selectedSorting;
    }

    public setSelectedSorting(selectedSorting: string): void {
        this.selectedSorting = selectedSorting;
    }

}