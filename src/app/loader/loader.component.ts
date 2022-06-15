import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../Services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  isLoaderVisible$: Observable<boolean>;
  constructor(private ls: LoaderService) {}

  ngOnInit() {
    this.isLoaderVisible$ = this.ls.isLoaderVisible();
  }
}
