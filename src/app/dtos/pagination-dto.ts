export class PaginationDto {

    private page: number;
    private pages: number[];
    private disablePrevious: boolean; 
    private disableNext: boolean;


	constructor($page: number, $pages: number[] , $disablePrevious: boolean, $disableNext: boolean) {
		this.page = $page;
		this.pages = $pages;
		this.disablePrevious = $disablePrevious;
		this.disableNext = $disableNext;
	}
    


    /**
     * Getter $page
     * @return {number}
     */
	public getPage(): number {
		return this.page;
	}

    /**
     * Getter $pages
     * @return {number[]}
     */
	public getPages(): number[] {
		return this.pages;
	}

    /**
     * Getter $disablePrevious
     * @return {boolean}
     */
	public isDisablePrevious(): boolean {
		return this.disablePrevious;
	}

    /**
     * Getter $disableNext
     * @return {boolean}
     */
	public isDisableNext(): boolean {
		return this.disableNext;
	}

    /**
     * Setter $page
     * @param {number} value
     */
	public setPage(value: number) {
		this.page = value;
	}

    /**
     * Setter $pages
     * @param {number[]} value
     */
	public setPages(value: number[]) {
		this.pages = value;
	}

    /**
     * Setter $disablePrevious
     * @param {boolean} value
     */
	public setDisablePrevious(value: boolean) {
		this.disablePrevious = value;
	}

    /**
     * Setter $disableNext
     * @param {boolean} value
     */
	public setDisableNext(value: boolean) {
		this.disableNext = value;
	}
    


}