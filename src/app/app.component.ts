import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { HttpService } from './general/http.service';
import { CartProduct, Product } from './interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCartModalOpened:boolean;
  products$: Observable<Product[]>;
  minRangeValue:number;
  maxRangeValue:number;
  productsLength:number;
  cartProductList: CartProduct[] = [];
  filteredProducts: Product[];

  constructor(private httpService: HttpService){}

  ngOnInit() {
    this.httpService.init();
    this.products$ = this.httpService.getProducts();
    this.productsLength = 9;
  }

  addProductToCart(product: Product) {
    const productInCart = this.cartProductList.find(cartProduct => cartProduct.id === product.id);

    if(!productInCart) {
      this.cartProductList.push({...product, quantity: 1});
      return this.cartProductList;
    }
    productInCart.quantity += 1;
  }

  showMore() {
    this.productsLength += 6;
  };

  openCartModal() {
    this.isCartModalOpened = true;
  }
  closeCartModal() {
    this.isCartModalOpened = false;
  }

  getMinRangeValue(value: any) {
    this.minRangeValue = parseInt(value);
    this.products$ = this.httpService.getProducts().pipe(
      filter(products => !!products),
      map((products: any) => products.filter(product => {
        let price = parseFloat(product.price);
        return Math.round(price) >= this.minRangeValue
      }))
    );
  }
  getMaxRangeValue(value: any) {
    this.maxRangeValue = parseInt(value);    
    this.products$ = this.httpService.getProducts().pipe(
      filter(products => !!products),
      map((products: any) => products.filter((product: Product) => {
        let price = parseFloat(product.price);
        return Math.round(price) <= this.maxRangeValue
      }))
    );
  }

  getSearchResults(event: string) {
    this.products$ = this.httpService.getProducts().pipe(
      filter(products => !!products),
      map((products: any) => products.filter((product: Product) => {
        if(event) {
          return product.name.toLowerCase().indexOf(event.toLowerCase()) !== -1
        } else {
          return products;
        }
      }))
    );
  }

  getCartTotals() {
    return this.cartProductList.reduce((acc, product) => acc+= product.quantity, 0);
  }

  totalPrice() {
    return this.cartProductList.reduce((acc, product) => acc += +product.price * product.quantity, 0);
  }

  removeProduct(product: CartProduct) {
    this.cartProductList = this.cartProductList.filter(cartProduct =>  cartProduct.name !== product.name);
  }
}
