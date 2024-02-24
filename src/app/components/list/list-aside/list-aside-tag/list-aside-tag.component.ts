import { Component } from '@angular/core';
import { TagEntity } from '../../../../entities/tag-entity';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'list-aside-tag',
  standalone: true,
  imports: [CommonModule],
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

}
