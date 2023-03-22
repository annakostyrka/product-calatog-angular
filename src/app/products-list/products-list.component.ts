import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: any = [];
  displayedProducts: any = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getProducts().subscribe(data => {
      this.products = data;
      this.displayedProducts = this.products.slice(0, 9);
      console.log(this.displayedProducts)
    });
  }

  showMore(){
    let newProductsLength = this.displayedProducts.length + 6;
    if(newProductsLength > this.products.length) {
      newProductsLength = this.products.length;
    }
    this.displayedProducts = this.products.slice(0, newProductsLength);
  };
}
