import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'list-aside-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-aside-search.component.html',
  styleUrl: './list-aside-search.component.css'
})
export class ListAsideSearchComponent {

  searchText: string = "";

}
