import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  postDetail$: Observable<any>;
  constructor(private api:ApiService, private route:ActivatedRoute) {}

  ngOnInit() {
    this.postDetail$ = this.route.paramMap.pipe(
      switchMap(params=> this.api.getPost(params.get('id')))
    )
  }
}
