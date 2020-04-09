import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products'
import { ProductService }  from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Product;

  constructor(
    private route:ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getBookById();
  }

  getBookById():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getBookById(id)
      .subscribe(book => this.book = book);
  }

  share() {
    window.alert('The product has been shared!');
  }

  addToCart(book) {
    this.cartService.addToCart(book);
  }
}
