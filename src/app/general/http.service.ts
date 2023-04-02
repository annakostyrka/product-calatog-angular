import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';
import { createHttpObservable } from './utils';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private subject = new BehaviorSubject<Product[]>([]);

  products$:Observable<Product[]> = this.subject.asObservable();

  productsUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  constructor(private http: HttpClient) { }

  init() {
    const http$ = createHttpObservable(this.productsUrl);

    http$
    .pipe(
      tap(()=>console.log("HTTP request executed.")),
      map((res: any) => {
        return res.map((item: any) => {
          return {
            id: item.id,
            image: item['image_link'],
            name: item.name,
            description: item.description,
            price: item.price,
            type: item.type
          }
        })
      })
    )
    .subscribe((products: Product[]) => this.subject.next(products));
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProducts() {
    return this.products$
    .pipe(
      map(products => products.filter(product => !!product ))
    );
    }
}
