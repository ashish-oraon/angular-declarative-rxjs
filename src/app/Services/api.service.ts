import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ApiService {
  private getPostsEndpoint = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    console.log('called');
    return this.http
      .get(this.getPostsEndpoint)
      .pipe(tap((res) => console.log(JSON.stringify(res[0]))));
  }
  getPost(id: string): Observable<any> {
    console.log('called');
    return this.http
      .get(`${this.getPostsEndpoint}/${id}`)
      .pipe(tap((res) => console.log(JSON.stringify(res))));
  }
}
