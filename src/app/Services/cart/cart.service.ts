import { Injectable } from '@angular/core';
import { faThemeisle } from '@fortawesome/free-brands-svg-icons';
import { Product } from 'src/app/Models/Products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private fullName: string = '';
  private TotalPrice: number = 0;
  private productsInCart: { product: Product; quantity: number }[] = [];
  constructor() {}

  getTotalPrice() {
    let temp: number = 0;
    for (let i = 0; i < this.productsInCart.length; i++) {
      const productPrice = this.productsInCart[i].product.price;
      const productQuantity = this.productsInCart[i].quantity;
      temp += productPrice * productQuantity;
    }
    this.TotalPrice = parseFloat(temp.toFixed(2));
    return this.TotalPrice;
  }

  addProduct(product: Product, quantity: number) {
    for (let i = 0; i < this.productsInCart.length; i++) {
      if (this.productsInCart[i].product.id === product.id) {
        this.productsInCart[i].quantity += Number(quantity);
        return;
      }
    }
    this.productsInCart.push({ product: product, quantity: quantity });
  }

  deleteProduct(id: number) {
    for (let i = 0; i < this.productsInCart.length; i++) {
      if (this.productsInCart[i].product.id === id) {
        this.productsInCart.splice(i, 1);
      }
    }
  }

  getProduct() {
    return this.productsInCart;
  }

  setFullName(fullName: string) {
    this.fullName = fullName;
  }

  getFullName() {
    return this.fullName;
  }
}
