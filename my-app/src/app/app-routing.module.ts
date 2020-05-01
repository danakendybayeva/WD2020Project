import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent} from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { GenresComponent } from './genres/genres.component'
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { MainComponent} from './main/main.component';
import { NewBooksComponent} from './new-books/new-books.component';
import { PopularComponent} from './popular/popular.component';
import { SearchComponent} from './search/search.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'genre/:id', component: GenresComponent },
  { path: 'genre/:id/books', component: GenresComponent },
  { path: 'book/all', component: BooksComponent },
  { path: 'book/search/:text', component: SearchComponent },
  { path: 'book/:id', component: BookDetailComponent },
  { path: 'book/:id/comments', component: BookDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newbooks', component: NewBooksComponent },
  { path: 'popular', component: PopularComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
