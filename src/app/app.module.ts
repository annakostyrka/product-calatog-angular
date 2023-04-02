import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './products-list/products-list.component';
import { ButtonComponent } from './UI/button/button.component';
import { PriceRangeFilterComponent } from './price-range-filter/price-range-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartModalComponent } from './shopping-cart-modal/shopping-cart-modal.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ProductDetailsModalComponent } from './product-details-modal/product-details-modal.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ButtonComponent,
    PriceRangeFilterComponent,
    HeaderComponent,
    ShoppingCartModalComponent,
    CartItemComponent,
    ProductDetailsModalComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
