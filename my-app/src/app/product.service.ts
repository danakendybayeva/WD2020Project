import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './products';
import { books } from './books';
import { GENRES } from './genres';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  books = books;
  genres = GENRES;

  constructor() { }

  getBooks(): Observable<Product[]>{
    return of(this.books);
  }

  getBookById(id): Observable<Product>{
    return of(books.find(book => book.id === id));
  }

  getBookByGenre(id): Observable<Product[]>{
    const choosedBook = this.books
      .filter(book => book.genre === id);
    return of(choosedBook);
  }
}
