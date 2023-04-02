import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-details-modal',
  templateUrl: './product-details-modal.component.html',
  styleUrls: ['./product-details-modal.component.scss']
})
export class ProductDetailsModalComponent {
  @Input() isModalOpened: boolean = false;
  @Input() product: Product;
  @Output() productAddedFromModal = new EventEmitter();
  @Output() onCloseModal = new EventEmitter();

  addProductToCart(product) {
    this.productAddedFromModal.emit(product);
    setTimeout(() => this.onCloseModal.emit(), 500)
  }

  closeModal() {
    this.onCloseModal.emit();
  }
}
