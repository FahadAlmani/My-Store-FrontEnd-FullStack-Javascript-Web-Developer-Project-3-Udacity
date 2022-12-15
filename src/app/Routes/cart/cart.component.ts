import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Products';
import { CartService } from '../../Services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: { product: Product; quantity: number }[] = [];
  TotalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.products = this.cartService.getProduct();
    this.TotalPrice = this.cartService.getTotalPrice();
  }

  updateTotal() {
    this.TotalPrice = this.cartService.getTotalPrice();
  }

  removeProduct(id: number) {
    console.log('click');
    this.cartService.deleteProduct(id);
    this.products = this.cartService.getProduct();
    this.updateTotal();
  }
}
