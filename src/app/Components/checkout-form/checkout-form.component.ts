import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart/cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent {
  fullName: string = '';
  address: string = '';
  creditCardNumber: string = '';

  constructor(private cartService: CartService) {}

  onSubmit() {
    this.cartService.setFullName(this.fullName);
  }
}
