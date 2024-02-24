import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'list-aside-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-aside-search.component.html',
  styleUrl: './list-aside-search.component.css'
})
export class ListAsideSearchComponent {

  categoryId: number|null = null;
  soring: string|null = null;
  page: string|null = null;
  searchText: string|null = null;
  tagId: number|null = null;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      this.categoryId = Number(params['categoryId']);
      this.soring = params['sorting'];
      this.page = params['page'];
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.searchText = params['searchtext'] ?? null;
      this.tagId = (params['tagid'] != undefined) ? Number(params['tagid']) : null;
    });

  }

  onClickSearch(text: string) {
    this.searchText = text;
    this.tagId = null;
    const path = `category/${this.categoryId}/sorting/${this.soring}/page/${this.page}`;
    this.router.navigate([path], { queryParams: { searchtext: this.searchText, tagid: this.tagId } });
  }

  onClickClear() {
    this.searchText = null;
    this.tagId = null;
    const path = `category/${this.categoryId}/sorting/${this.soring}/page/${this.page}`;
    this.router.navigate([path], { queryParams: { searchtext: this.searchText, tagid: this.tagId } });
  }

}
