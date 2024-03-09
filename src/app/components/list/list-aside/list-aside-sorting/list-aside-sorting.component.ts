import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { SortingEnum } from '../../../../enums/sorting-enum';
import { ActivatedRoute, Router } from '@angular/router';
import $ from "jquery";

@Component({
  selector: 'list-aside-sorting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-aside-sorting.component.html',
  styleUrl: './list-aside-sorting.component.css'
})
export class ListAsideSortingComponent implements AfterViewInit {

  sorting: SortingEnum[] = [SortingEnum.AUTHOR_DECREASING, SortingEnum.AUTHOR_INCREASING, SortingEnum.DATE_DECREASING, 
                            SortingEnum.DATE_INCREASING, SortingEnum.TITLE_DECREASING, SortingEnum.TITLE_INCREASING];

  categoryId: string|null = null;
  selectedSoring: string|null = null;
  page: string|null = null;
  searchText: string|null = null;
  tagId: string|null = null;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      this.categoryId = params['categoryId'];
      this.selectedSoring = params['sorting'];
      this.page = params['page'];
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.searchText = params['searchtext'];
      this.tagId = params['tagid'];
    });

  }

  ngAfterViewInit(): void {
    $.getScript('./../../../../../assets/js/custom.js');
  }

  onChange(event: any) {
    this.selectedSoring = event.target.value;
    const path = `category/${this.categoryId}/sorting/${this.selectedSoring}/page/${this.page}`;
    this.router.navigate([path], { queryParams: { searchtext: this.searchText, tagid: this.tagId } });
  }


}
