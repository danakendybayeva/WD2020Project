import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GENRES} from './genres';
import { Genre} from './genre';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private route:ActivatedRoute) { }

  genres = GENRES;

  getGenres(): Observable<Genre[]>{
    return of(GENRES);
  }

  getGenreById(id): Observable<Genre>{
    return of(GENRES.find(genre => genre.id === id));
  }

}
