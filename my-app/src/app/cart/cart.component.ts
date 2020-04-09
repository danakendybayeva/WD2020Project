import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{

  books: Product[] = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getItems()
  }

  getItems(): void {
    this.cartService.getItems().subscribe(books => this.books = books);
  }

  clearCart(){
    this.cartService.clearCart();
  }
}