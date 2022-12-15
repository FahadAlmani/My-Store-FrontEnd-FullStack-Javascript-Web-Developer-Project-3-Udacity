import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart/cart.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
})
export class OrderConfirmationComponent {
  fullName: string = '';
  amount: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.fullName = this.cartService.getFullName();
    this.amount = this.cartService.getTotalPrice();
  }
}
