import { Component, OnInit } from '@angular/core';
import { Genre } from '../genre';
import { GenresService } from '../genres.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  genres: Genre[];
  
  constructor( private genresService: GenresService) { }

  ngOnInit(): void {
    this.getGenres()
  }

  getGenres(): void {
    this.genresService.getGenres().subscribe( genres => this.genres = genres)
  }

}
