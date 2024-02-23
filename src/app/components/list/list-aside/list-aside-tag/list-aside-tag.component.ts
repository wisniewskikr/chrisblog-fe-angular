import { Component } from '@angular/core';
import { TagEntity } from '../../../../entities/tag-entity';
import { CommonModule } from '@angular/common';

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
    }
  ];

  selectedTag: number = 1;
  selectedCategory: string = 'IT';  

}
