import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import environment from '../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
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

  createList(listName: string): Observable<any> {
    const formData = new FormData();

    formData.append('list_title', listName);

    return this.http.post(`${this.url}/create-list/`, formData).pipe(
      map((data: Response) => {
        return data;
      })
    );
  }

  getLists() {
    const showLists = this.http.get(`${this.url}/show-lists`);
    return showLists;
  }

  getListRecipes(id): Observable<any> {
    return this.http.get(`${this.url}/show-recipes/${id}`).pipe(
      map((data: Response) => {
        return data;
      })
    );
  }

  deleteRecipe(id) {
    return this.http.delete(`${this.url}/remove-recipe/${id}`);
  }

  editList(id: number, listName: string): Observable<any> {
    const formData = new FormData();

    formData.append('list_title', listName);

    return this.http.post(`${this.url}/update-list/`, formData).pipe(
      map((data: Response) => {
        return data;
      })
    );
  }

  deleteList(id) {
    return this.http.delete(`${this.url}/remove-list/${id}`);
  }
}
