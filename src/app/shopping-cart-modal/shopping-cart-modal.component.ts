import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct } from '../interfaces/product';

@Component({
  selector: 'app-shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss']
})
export class ShoppingCartModalComponent {
  @Input() products: CartProduct[];
  @Input() cartTotal: number;
  @Output() productRemoved = new EventEmitter();
  @Output() productRemovedFromCart = new EventEmitter();
  @Output() itemsTotalChanged = new EventEmitter();
  @Output() onCloseModal = new EventEmitter();
  @Input() isModalOpened:boolean;
  @Input() totalPrice: number;

  removeProduct(product: CartProduct) {
    if(product.quantity === 0){
      this.productRemoved.emit(product)
    }
  }

  removeProductFromCart(product: CartProduct) {
    this.productRemovedFromCart.emit(product)
  }

  closeModal() {
    this.onCloseModal.emit();
  }
}
