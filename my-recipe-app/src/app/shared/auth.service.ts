import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// User interface
export class User {
  name: String;
  email: String;
  password: String;
  password_confirmation: String;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  url = environment.apiUrl;

  // User registration
  register(user: User): Observable<any> {
    console.log(this.url);
    return this.http.post(`${this.url}/api/auth/signup`, user);
    // return this.http.post('http://127.0.0.1:80/api/auth/signup', user);
  }

  // Login
  login(user: User): Observable<any> {
    // return this.http.post<any>('http://127.0.0.1:80/api/auth/login', user);
    return this.http.post<any>(`${this.url}/api/auth/login`, user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    // return this.http.get('http://127.0.0.1:80/api/auth/user-profile');
    return this.http.get(`${this.url}/auth/user-profile`);
  }
}
