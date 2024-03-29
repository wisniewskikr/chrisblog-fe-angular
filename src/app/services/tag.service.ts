import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { TagRequest } from '../dtos/tag-request';
import { TagResponse } from '../dtos/tag-response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  URL = environment.beUrl + '/api/v1/tag';

  constructor(private http: HttpClient) {}

  findTags(tagRequest: TagRequest) {

    let params = new HttpParams();
    params = params.append('categoryId', tagRequest.$categoryId);
    params = params.append('page', tagRequest.$page);    
    params = params.append('sorting', tagRequest.$sorting);
    if (tagRequest.$searchText) {
      params = params.append('searchText', tagRequest.$searchText);
    }
    if (tagRequest.$tagId) {
      params = params.append('tagId', tagRequest.$tagId);
    }

    return this.http.get<TagResponse>(this.URL, { params: params })
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
