import { CartService } from './../../cart/cart-service';
import { Product } from './../product';
import { Component, computed, inject, signal } from '@angular/core';
import { ProductsCard } from '../products-card/products-card';
import { Product } from '../product';
import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-products-grids',
  imports: [ProductsCard, MatIcon, MatInputModule, FormsModule, MatFormFieldModule],
  templateUrl: './products-grids.html',
  styleUrl: './products-grids.scss',
})
export class ProductsGrids {



  protected readonly searchTerm = signal('');

  protected readonly products = signal<Product[]>([{
    id: 1,
    name: 'Smartwatch',
    description: 'an amazing smartwatch with many features and a sleek design.',
    price: 19.99,
    originalPrice: 29.99,
  }, {
    id: 2,
    name: 'Headphones',
    description: 'high-quality headphones for an immersive audio experience.',
    price: 9.99,

  }, {
    id: 3,
    name: 'Laptop',
    description: 'a powerful laptop for work and play.',
    price: 14.99,
    originalPrice: 24.99,
  }]);

  private readonly cartService = inject(CartService);

  protected readonly filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if(!term) return this.products();

    return this.products().filter((product) => product.name.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term));
  });

  protected clearSearch() {
    this.searchTerm.set('');
  }

  protected onAddToCard(product: Product) {
    this.cartService.addToCart(product);
  }
}
