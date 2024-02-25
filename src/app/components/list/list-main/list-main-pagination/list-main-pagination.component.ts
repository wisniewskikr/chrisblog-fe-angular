import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationDto } from '../../../../dtos/pagination-dto';
import { PaginationService } from '../../../../services/pagination.service';

@Component({
  selector: 'list-main-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-main-pagination.component.html',
  styleUrl: './list-main-pagination.component.css'
})
export class ListMainPaginationComponent implements OnInit{  

  pagination: PaginationDto|null = null;

  constructor(private paginationService: PaginationService) {}
  
  ngOnInit(): void {
    
    this.paginationService.pagination$.subscribe((data)=>{ 
      this.pagination = data;
    });

  }

}
