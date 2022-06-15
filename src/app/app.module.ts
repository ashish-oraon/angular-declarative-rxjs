import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { ApiService } from './Services/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInteceptor } from './interceptors/loader.interceptor.service';
import { LoaderService } from './Services/loader.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    PostDetailComponent,
    PostListComponent,
    LoaderComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInteceptor, multi: true },
    ApiService,
    LoaderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
