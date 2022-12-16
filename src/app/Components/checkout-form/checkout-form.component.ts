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
  creditErrorMassage: string = "The input entered isn't number";
  @Output() passFullName: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {}

  onSubmit() {
    this.passFullName.emit(this.fullName);
    this.router.navigate(['/orderConfirmation']);
  }

  inputValidation() {
    if (this.creditCardNumber === '') {
      return false;
    } else if (Number(this.creditCardNumber)) {
      return false;
    }
    return true;
  }
}
