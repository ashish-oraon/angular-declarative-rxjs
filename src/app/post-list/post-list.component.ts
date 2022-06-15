import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  allPosts$: Observable<any>;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.allPosts$ = this.api.getPosts();
  }
 
}
