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

  createList(listName: string) {
    console.log('Create list button connected', listName);
    const formData = new FormData();

    formData.append('list_title', listName);

    const newList = this.http.post(`${this.url}/create-list/`, formData);
    newList.subscribe(
      (message) => console.log(message),
      (error) => console.log(error)
    );
  }

  getLists() {
    const showLists = this.http.get(`${this.url}/show-lists`);
    return showLists;
  }
}
