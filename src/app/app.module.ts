import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './Routes/product-list/product-list.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ItemCardComponent } from './Components/item-card/item-card.component';
import { CartComponent } from './Routes/cart/cart.component';
import { ProductDetailsComponent } from './Routes/product-details/product-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckoutFormComponent } from './Components/checkout-form/checkout-form.component';
import { OrderConfirmationComponent } from './Routes/order-confirmation/order-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavBarComponent,
    ItemCardComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutFormComponent,
    OrderConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
