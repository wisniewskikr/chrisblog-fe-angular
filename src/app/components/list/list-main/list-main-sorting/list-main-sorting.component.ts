import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingEnum } from '../../../../enums/sorting-enum';
import { ActivatedRoute, Router } from '@angular/router';

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

  onChange(event: any) {
    this.selectedSoring = event.target.value;
    const path = `category/${this.categoryId}/sorting/${this.selectedSoring}/page/${this.page}`;
    this.router.navigate([path], { queryParams: { searchtext: this.searchText, tagid: this.tagId } });
  }

}
