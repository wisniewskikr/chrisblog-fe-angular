import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SortingEnum } from '../../../../enums/sorting-enum';

@Component({
  selector: 'list-aside-sorting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-aside-sorting.component.html',
  styleUrl: './list-aside-sorting.component.css'
})
export class ListAsideSortingComponent {

  sorting: SortingEnum[] = [SortingEnum.AUTHOR_DECREASING, SortingEnum.AUTHOR_INCREASING, SortingEnum.DATE_DECREASING, 
                            SortingEnum.DATE_INCREASING, SortingEnum.TITLE_DECREASING, SortingEnum.TITLE_INCREASING];


}
