import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/Products';
import { ProductService } from '../../Services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  quantity: number[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      for (let i = 0; i < this.products.length; i++) {
        this.quantity.push(1);
      }
    });
  }
}
