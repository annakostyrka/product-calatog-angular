import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartProduct } from '../interfaces/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product: CartProduct;
  @Output() productRemoved = new EventEmitter();
  @Output() productRemovedFromCart = new EventEmitter();
  productNumber = new FormControl();

  ngOnInit() {
    this.productNumber = new FormControl(this.product.quantity);
    this.productNumber.valueChanges.subscribe(val => {
      this.product.quantity = +val;
    })
  }

  removeProduct() {
    if(this.product.quantity === 0){
      this.productRemoved.emit();
    }
  }

  removeProductFromCart() {
    this.productRemovedFromCart.emit();
  }
}
