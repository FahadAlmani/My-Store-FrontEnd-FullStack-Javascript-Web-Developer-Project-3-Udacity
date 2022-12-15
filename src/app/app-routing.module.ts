import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Routes/product-list/product-list.component';
import { CartComponent } from './Routes/cart/cart.component';
import { ProductDetailsComponent } from './Routes/product-details/product-details.component';
import { OrderConfirmationComponent } from './Routes/order-confirmation/order-confirmation.component';

const routes: Routes = [
  { component: ProductListComponent, path: '' },
  { component: CartComponent, path: 'cart' },
  { component: ProductDetailsComponent, path: 'product-details/:id' },
  {component:OrderConfirmationComponent, path: "orderConfirmation"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
