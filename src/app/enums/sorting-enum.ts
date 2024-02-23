export class SortingEnum {

    public static readonly TITLE_INCREASING = new SortingEnum("title: increasing", "title_increasing");
    public static readonly TITLE_DECREASING = new SortingEnum("title: decreasing", "title_decreasing");
    public static readonly DATE_INCREASING = new SortingEnum("date: increasing", "date_increasing");
    public static readonly DATE_DECREASING = new SortingEnum("date: decreasing", "date_decreasing");
    public static readonly AUTHOR_INCREASING = new SortingEnum("author: increasing", "author_increasing");
    public static readonly AUTHOR_DECREASING = new SortingEnum("author: decreasing", "author_decreasing");

    constructor(public readonly text: string, public readonly value: string) {}

}