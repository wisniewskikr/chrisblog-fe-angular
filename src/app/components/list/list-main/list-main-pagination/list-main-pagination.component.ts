import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationDto } from '../../../../dtos/pagination-dto';
import { PaginationService } from '../../../../services/pagination.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'list-main-pagination',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-main-pagination.component.html',
  styleUrl: './list-main-pagination.component.css'
})
export class ListMainPaginationComponent implements OnInit{  

  pagination: PaginationDto|null = null;
  categoryId: number|null = null;
  sorting: string|null = null;
  page: number|null = null;
  searchText: string|null = null;
  tagId: number|null = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private paginationService: PaginationService) {}
  
  ngOnInit(): void {

    this.paginationService.pagination$.subscribe((data)=>{ 
      this.pagination = data;
    });

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

    if (this.pagination == null) {
      throw new Error("Object PaginationDto can not be empty");
    }

    if (this.page == null) {
      throw new Error("Object Page can not be null");
    }

    this.page = this.page - 1;
    const path = `category/${this.categoryId}/sorting/${this.sorting}/page/${this.page}`;
    this.router.navigate([path], { queryParams: { searchtext: this.searchText, tagid: this.tagId } });

  }

  onClickNext() {

    if (this.pagination == null) {
      throw new Error("Object PaginationDto can not be empty");
    }

    if (this.page == null) {
      throw new Error("Object Page can not be null");
    }

    this.page = this.page + 1;
    const path = `category/${this.categoryId}/sorting/${this.sorting}/page/${this.page}`;
    this.router.navigate([path], { queryParams: { searchtext: this.searchText, tagid: this.tagId } });

  }

}
