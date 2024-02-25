class ArticleRequest {

    private categoryId: number;
    private tagId: number;
    private page: number;
    private sorting: string;
    private searchText: string;

	constructor($categoryId: number, $tagId: number, $page: number, $sorting: string, $searchText: string) {
		this.categoryId = $categoryId;
		this.tagId = $tagId;
		this.page = $page;
		this.sorting = $sorting;
		this.searchText = $searchText;
	}    

    /**
     * Getter $categoryId
     * @return {number}
     */
	public get $categoryId(): number {
		return this.categoryId;
	}

    /**
     * Getter $tagId
     * @return {number}
     */
	public get $tagId(): number {
		return this.tagId;
	}

    /**
     * Getter $page
     * @return {number}
     */
	public get $page(): number {
		return this.page;
	}

    /**
     * Getter $sorting
     * @return {string}
     */
	public get $sorting(): string {
		return this.sorting;
	}

    /**
     * Getter $searchText
     * @return {string}
     */
	public get $searchText(): string {
		return this.searchText;
	}

    /**
     * Setter $categoryId
     * @param {number} value
     */
	public set $categoryId(value: number) {
		this.categoryId = value;
	}

    /**
     * Setter $tagId
     * @param {number} value
     */
	public set $tagId(value: number) {
		this.tagId = value;
	}

    /**
     * Setter $page
     * @param {number} value
     */
	public set $page(value: number) {
		this.page = value;
	}

    /**
     * Setter $sorting
     * @param {string} value
     */
	public set $sorting(value: string) {
		this.sorting = value;
	}

    /**
     * Setter $searchText
     * @param {string} value
     */
	public set $searchText(value: string) {
		this.searchText = value;
	}

}