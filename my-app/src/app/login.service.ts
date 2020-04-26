import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { LoginResponse } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/login/`, {
      username,
      password
    })
  }
} 
