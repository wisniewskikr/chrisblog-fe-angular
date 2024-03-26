import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ArticleRequest } from '../dtos/article-request';
import { ArticleResponse } from '../dtos/article-response';
import { ArticleEntity } from '../entities/article-entity';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  URL = environment.beUrl + '/api/v1/article';

  constructor(private http: HttpClient) {}

  findArticles(articleRequest: ArticleRequest) {

    let params = new HttpParams();
    params = params.append('categoryId', articleRequest.$categoryId);
    params = params.append('page', articleRequest.$page);    
    params = params.append('sorting', articleRequest.$sorting);
    if (articleRequest.$searchText) {
      params = params.append('searchText', articleRequest.$searchText);
    }
    if (articleRequest.$tagId) {
      params = params.append('tagId', articleRequest.$tagId);
    }    

    return this.http.get<ArticleResponse>(this.URL, { params: params })
          .pipe(
            catchError(this.handleError)
          );

  }

  findArticleById(id: number) {

    return this.http.get<ArticleEntity>(this.URL + "/" + id)
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
