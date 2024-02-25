import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PaginationDto } from '../dtos/pagination-dto';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  private paginationSource = new Subject<PaginationDto>();

  pagination$ = this.paginationSource.asObservable();

  updatePagination(pagination: PaginationDto) {
    this.paginationSource.next(pagination);
  }

}
