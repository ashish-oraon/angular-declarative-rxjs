import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  private getPostsEndpoint = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    console.log('called');
    return this.http
      .get(this.getPostsEndpoint)
      .pipe(catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage: string = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured ${err.error.message}`;
    } else {
      errorMessage = `Error response code ${err.status}: ${err.message}`;
    }
    return throwError(() => errorMessage);
  }
  getPost(id: string): Observable<any> {
    console.log('called');
    return this.http
      .get(`${this.getPostsEndpoint}/${id}`)
      .pipe(catchError(this.handleError));
  }
}
