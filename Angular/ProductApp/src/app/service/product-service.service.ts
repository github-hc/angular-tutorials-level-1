import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient: HttpClient) {

  }

  getAllProducts() {
    return this.httpClient.get(environment.base_url + 'products');
  }
}
