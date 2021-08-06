import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './List';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import environment from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  url = environment.API_URL;
  accessToken = localStorage.getItem('accessToken');
  authHeader = `Bearer ${this.accessToken}`;
  contentType = 'application/json';

  getFetchData(headers) {
    const fetchData = {
      headers: new HttpHeaders(headers),
    };
    return fetchData;
  }

  getLists(): Observable<any> {
    const fetchData = this.getFetchData({ Authorization: this.authHeader });
    return this.http.get(`${this.url}/show-lists`, fetchData);
  }

  createList(title) {
    const fetchData = this.getFetchData({
      Authorization: this.authHeader,
      'Content-Type': this.contentType,
    });
    const request = this.http.post(`${this.url}/create-list`, title, fetchData);
    request.subscribe((message) => message);
  }

  removeList(id) {
    const fetchData = this.getFetchData({
      Authorization: this.authHeader,
      'Content-Type': this.contentType,
    });
    const request = this.http.delete(
      `${this.url}/remove-list/${id}`,
      fetchData
    );
    request.subscribe((message) => message);
  }
}

// return this.http.post(
//   'http://127.0.0.1:8000/api/auth/create-list',
//   list_title,
//   fetchData
// );
