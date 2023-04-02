import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  @Input() products: Product[];
  @Output() productAdded = new EventEmitter();
  selectedProduct: Product;
  isProductDetailsModalOpened = false;

  addProductToCart(product) {
    this.productAdded.emit(product);
  }

  showProductDetails(event:Product) {
    this.selectedProduct = this.products.find(product => product.id === event.id)
    this.isProductDetailsModalOpened = true;
  }

  closeProductDetailsModal() {
    this.isProductDetailsModalOpened = false;
  }
}
