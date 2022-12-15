import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Products';
import { ProductService } from 'src/app/Services/product/product.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/Services/cart/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: Product = { id: -1, name: '', price: -1, url: '', description: '' };
  quantity: number = 1;
  faArrowLeft = faArrowLeft;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const productId = parseInt(
      this.route.snapshot.paramMap.get('id') as string
    );

    this.productService.getProducts().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === productId) {
          this.product = data[i];
          break;
        }
      }
    });
  }
  onSubmit() {
    this.cartService.addProduct(this.product, Number(this.quantity));
    alert('the product was added');
  }
}
