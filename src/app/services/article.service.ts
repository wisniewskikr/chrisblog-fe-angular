import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ArticleRequest } from '../dtos/article-request';
import { ArticleResponse } from '../dtos/article-response';
import { ArticleEntity } from '../entities/article-entity';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  URL = 'http://localhost:8080/api/v1/article';

  constructor(private http: HttpClient) {}

  findArticles(articleRequest: ArticleRequest) {

    return this.http.post<ArticleResponse>(this.URL, articleRequest)
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
