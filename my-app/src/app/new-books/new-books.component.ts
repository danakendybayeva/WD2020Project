import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.css']
})
export class NewBooksComponent implements OnInit {

  books: Product[];

  constructor(
    private productService: ProductService,
    private cartService: CartService, 
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void{
    this.productService.getBooks()
      .subscribe(books => this.books = books);
  }

  addToCart(product: Product): void{
    this.cartService.addToCart(product);
  }

}
