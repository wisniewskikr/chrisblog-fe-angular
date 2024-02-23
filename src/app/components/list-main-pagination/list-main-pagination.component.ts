import { Component, OnInit } from '@angular/core';
import { PaginationModel } from '../../models/pagination-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'list-main-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-main-pagination.component.html',
  styleUrl: './list-main-pagination.component.css'
})
export class ListMainPaginationComponent implements OnInit{  

  pagination: PaginationModel|null = null;
  
  ngOnInit(): void {
    this.pagination = new PaginationModel();
    this.pagination.setCurrentPage(1);
    this.pagination.setPages([1,2,3]);
  }

}
