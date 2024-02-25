import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { CategoryResponse } from '../dtos/category-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  URL = 'http://localhost:8080/api/v1/category';

  constructor(private http: HttpClient) {}

  findCategories() {

    return this.http.get<CategoryResponse>(this.URL)
          .pipe(
            catchError(this.handleError)
          );

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
