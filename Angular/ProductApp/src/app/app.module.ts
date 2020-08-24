import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponentComponent } from './shared/loading-component/loading-component.component';
import { LoaderServiceService } from '../app/service/loader-service.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { ReverseStr } from '../app/utils/rev.pipe'
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LoadingComponentComponent,
    ReverseStr
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoaderServiceService
    , { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
    , { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
