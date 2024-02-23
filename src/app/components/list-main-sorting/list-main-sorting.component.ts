import { Component } from '@angular/core';
import { SortingEnum } from '../../enums/SortingEnum';
import { CommonModule } from '@angular/common';

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

}
