import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Products';
import { CartService } from './../../Services/cart/cart.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {
  @Input() product: Product;
  @Input() quantity: number;
  constructor(private cartService: CartService) {
    this.product = {
      id: -1,
      name: '',
      price: -1,
      url: '',
      description: '',
    };
    this.quantity = -1;
  }

  onSubmit() {
    this.cartService.addProduct(this.product, Number(this.quantity));
    alert('the product was added');
  }
}
