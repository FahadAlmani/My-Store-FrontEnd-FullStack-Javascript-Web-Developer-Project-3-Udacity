import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  creditErrorMassage: string = '';
  @Output() passFullName: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {}

  onSubmit() {
    if (Number(this.creditCardNumber)) {
      this.passFullName.emit(this.fullName);
      this.router.navigate(['/orderConfirmation']);
    } else {
      this.creditErrorMassage = "The input entered isn't number";
    }
  }
}
