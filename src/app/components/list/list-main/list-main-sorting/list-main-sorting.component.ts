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
  
  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      console.log("ListMainSortingComponent - category: " + params['category']);
      console.log("ListMainSortingComponent - sorting: " + params['sorting']);
      console.log("ListMainSortingComponent - page: " + params['page']);
    });

    this.activatedRoute.queryParams.subscribe(params => {
      console.log("ListMainSortingComponent - searchtext: " + params['searchtext']);
      console.log("ListMainSortingComponent - tags: " + params['tags']);
    });

  }

}
