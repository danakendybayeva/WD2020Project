import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs'
import { Product } from './products'

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems(): Observable<Product[]> {
    return of(this.items);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}