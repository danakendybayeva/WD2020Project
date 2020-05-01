import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  BASE_URL = 'http://localhost:8000'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  
  addComment(comment: String, id): Observable<Comment> {
    return this.http.post<Comment>(`${this.BASE_URL}/book/${id}/comments/`, comment, this.httpOptions);
  }

  getComments(id): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.BASE_URL}/book/${id}/comments/`);
  }
}
