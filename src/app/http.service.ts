import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  productsUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(this.productsUrl);
  }
}
