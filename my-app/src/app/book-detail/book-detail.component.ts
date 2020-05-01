import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products'
import { ProductService }  from '../product.service';
import { CartService } from '../cart.service';
import { CommentService} from '../comment.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Product;
  comments: Comment[];

  constructor(
    private route:ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.getBookById();
    this.getComments();
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

  addComment(text: string): void {
    const book_id = +this.route.snapshot.paramMap.get('id');
    const user_id = 1;
    text = text.trim();
    if (!text) { return; }
    this.commentService.addComment(text, book_id, user_id)
      .subscribe(comment => {
        this.comments.push(comment);
      });
  }

  getComments(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.getComments(id)
      .subscribe(comments => this.comments = comments);
  }
}
