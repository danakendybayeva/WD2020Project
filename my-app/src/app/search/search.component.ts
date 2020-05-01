import { Component, OnInit } from '@angular/core';
import { Product} from '../products';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  books: Product[];

  constructor(private route: ActivatedRoute, private productService: ProductService,) { }

  ngOnInit(): void {
    this.search();
  }

  search(): void{
    const text = this.route.snapshot.paramMap.get('text');
    this.productService.searchBook(text)
      .subscribe(books => this.books = books);
  }
}
