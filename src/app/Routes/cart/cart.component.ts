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

  updateTotal(quantity: number, id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].product.id === id) {
        const productName: string = this.products[i].product.name;
        const oldQuantity: number = this.products[i].quantity;
        this.products[i].quantity = quantity;

        if (oldQuantity < quantity) {
          alert(`You added ${quantity - oldQuantity} ${productName}`);
        } else if (oldQuantity > quantity) {
          alert(`You removed ${oldQuantity - quantity} ${productName}`);
        }

        break;
      }
    }
    this.TotalPrice = this.cartService.getTotalPrice();
  }

  removeProduct(id: number) {
    this.cartService.deleteProduct(id);
    this.products = this.cartService.getProduct();
    this.TotalPrice = this.cartService.getTotalPrice();
    alert('The product was removed');
  }

  getFullName(fullName: string) {
    this.cartService.setFullName(fullName);
  }
}
