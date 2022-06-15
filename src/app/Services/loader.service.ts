import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoaderService {
  private isLoading = new BehaviorSubject(false);
  private isLoading$ = this.isLoading.asObservable();
  constructor() {}
  emitValue(v: boolean) {
    this.isLoading.next(v);
  }
  isLoaderVisible(): Observable<boolean> {
    return this.isLoading$;
  }
}
