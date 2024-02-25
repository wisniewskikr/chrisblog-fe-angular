import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  URL = 'http://localhost:8080/api/v1/article';

  constructor(private http: HttpClient) {}

  findArticles() {
    return this.http.get(this.URL, {responseType: 'json'})
          .pipe(
            catchError((error) => {
              return throwError(() => error);
            })
          );
  }

}
