import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingEnum } from '../../../../enums/sorting-enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'list-main-sorting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-main-sorting.component.html',
  styleUrl: './list-main-sorting.component.css'
})
export class ListMainSortingComponent {

  sorting: SortingEnum[] = [SortingEnum.AUTHOR_DECREASING, SortingEnum.AUTHOR_INCREASING, SortingEnum.DATE_DECREASING, 
                            SortingEnum.DATE_INCREASING, SortingEnum.TITLE_DECREASING, SortingEnum.TITLE_INCREASING];

  category: string|null = null;
  selectedSoring: string|null = null;
  page: string|null = null;
  searchText: string|null = null;
  tags: string|null = null;
  
  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.category = params['category'];
      this.selectedSoring = params['sorting'];
      this.page = params['page'];
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.searchText = params['searchText'];
      this.tags = params['tags'];
    });

  }

}
