import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'list-main-pagination',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-main-pagination.component.html',
  styleUrl: './list-main-pagination.component.css'
})
export class ListMainPaginationComponent implements OnInit{  

  categoryId: number|null = null;
  sorting: string|null = null;
  page: number|null = null;
  searchText: string|null = null;
  tagId: number|null = null;
  @Input() pages: number[] = [];
  @Input() disablePrevious: boolean = false; 
  @Input() disableNext: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {

      this.categoryId = Number(params['categoryId']);
      this.sorting = params['sorting'];
      this.page = Number(params['page']);

    });

    this.activatedRoute.queryParams.subscribe(params => {

      const searchTextParam = params['searchtext'];
      const tagIdParam = params['tagid'];

      if (searchTextParam == undefined && tagIdParam == undefined &&
        this.searchText == null && this.tagId == null) {
          return;
      }

      this.searchText = searchTextParam ?? null;
      this.tagId = (tagIdParam != undefined) ? Number(tagIdParam) : null;
    
    });

  }

  onClickPrevious() {

    if (this.page == null) {
      throw new Error("Object Page can not be null");
    }

    this.page = this.page - 1;
    const path = `category/${this.categoryId}/sorting/${this.sorting}/page/${this.page}`;
    this.router.navigate([path], { queryParams: { searchtext: this.searchText, tagid: this.tagId } });

  }

  onClickNext() {

    if (this.page == null) {
      throw new Error("Object Page can not be null");
    }

    this.page = this.page + 1;
    const path = `category/${this.categoryId}/sorting/${this.sorting}/page/${this.page}`;
    this.router.navigate([path], { queryParams: { searchtext: this.searchText, tagid: this.tagId } });

  }

  onClick(newPage: number) {

    const path = `category/${this.categoryId}/sorting/${this.sorting}/page/${newPage}`;
    this.router.navigate([path], { queryParams: { searchtext: this.searchText, tagid: this.tagId } });

  }

}
