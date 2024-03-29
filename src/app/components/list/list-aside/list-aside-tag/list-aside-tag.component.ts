import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TagEntity } from '../../../../entities/tag-entity';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TagService } from '../../../../services/tag.service';
import { TagRequest } from '../../../../dtos/tag-request';

@Component({
  selector: 'list-aside-tag',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-aside-tag.component.html',
  styleUrl: './list-aside-tag.component.css'
})
export class ListAsideTagComponent implements OnInit, AfterViewInit {

  tags: TagEntity[] = [];
  categoryId: number|null = null;
  sorting: string|null = null;
  page: number|null = null;
  searchText: string|null = null;
  tagId: number|null = null;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private tagService: TagService) {}

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {

      $.getScript('./../../../../../assets/js/main.js');

      this.categoryId = Number(params['categoryId']);
      this.sorting = params['sorting'];
      this.page = Number(params['page']);

      if (this.categoryId == null || this.page == null || this.sorting == null) {
        throw new Error("Atributes 'categoryId', 'page' and 'sorting' are required.");
      }
      
      this.handleTagApi(new TagRequest(this.categoryId, this.tagId, this.page, this.sorting, this.searchText));

    });

    this.activatedRoute.queryParams.subscribe(params => {

      $.getScript('./../../../../../assets/js/main.js');

      const searchTextParam = params['searchtext'];
      const tagIdParam = params['tagid'];
      
      if (searchTextParam == undefined && tagIdParam == undefined &&
        this.searchText == null && this.tagId == null) {
          return;
      }

      this.searchText = searchTextParam ?? null;
      this.tagId = (tagIdParam != undefined) ? Number(tagIdParam) : null;

      if (this.categoryId == null || this.page == null || this.sorting == null) {
        throw new Error("Atributes 'categoryId', 'page' and 'sorting' are required.");
      }
      
      this.handleTagApi(new TagRequest(this.categoryId, this.tagId, this.page, this.sorting, this.searchText));

    });    

  }  

  ngAfterViewInit(): void {
    $.getScript('./../../../../../assets/js/main.js');
  }
  
  onClick(tag: number) {

    this.tagId = (this.tagId != tag) ? tag : null;
    this.searchText = null;
    const path = `category/${this.categoryId}/sorting/${this.sorting}/page/${this.page}`;
    this.router.navigate([path], { queryParams: { searchtext: this.searchText, tagid: this.tagId } });

  }

  handleTagApi(tagRequest: TagRequest): void {

    let response = this.tagService.findTags(tagRequest);
    response.subscribe((data)=>{      
      this.tags = data.tags;
    });

  }

}
