import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../Services/loader.service';
import { finalize } from 'rxjs/operators';
@Injectable()
export class LoaderInteceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.emitValue(true);
    return next
      .handle(req)
      .pipe(finalize(() => this.loaderService.emitValue(false)));
  }
}
