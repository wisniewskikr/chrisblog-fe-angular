import { Component } from '@angular/core';
import { TagEntity } from '../../../../entities/tag-entity';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'list-aside-tag',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-aside-tag.component.html',
  styleUrl: './list-aside-tag.component.css'
})
export class ListAsideTagComponent {

  tags: TagEntity[] = [
    {
      id: 1,
      name: 'Tag 1',
      articles: []
    },
    {
      id: 2,
      name: 'Tag 2',
      articles: []
    }
  ];

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
      this.searchText = params['searchtext'];
      this.tagId = (params['tagid'] != undefined) ? Number(params['tagid']) : null;
    });

  }
  
  onClick(tag: number) {
    this.tagId = (this.tagId != tag) ? tag : null;
    const path = `category/${this.categoryId}/sorting/${this.soring}/page/${this.page}`;
    this.router.navigate([path], { queryParams: { searchtext: this.searchText, tagid: this.tagId } });
  }

}
