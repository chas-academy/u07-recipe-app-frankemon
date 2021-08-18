import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { List } from './List';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import environment from '../environments/environment';
import { NewListComponent } from './components/new-list/new-list.component';
import { ShowRecipesComponent } from './components/show-recipes/show-recipes.component';
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
  // listRecipes: any = [];

  getFetchData(headers) {
    const fetchData = {
      headers: new HttpHeaders(headers),
    };
    return fetchData;
  }

  createList(listName: string): Observable<any> {
    console.log('Create list button connected', listName);
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
    console.log(showLists);
    return showLists;
  }

  // getListRecipes(id): Observable<any> {
  //   // const id = this.route.snapshot.params['id'];
  //   // const savedRecipes = this.http.get(`${this.url}/show-recipes/${id}`);
  //   // return savedRecipes;
  //   const listRecipes = this.http.get(`${this.url}/show-recipes/${id}`);
  //   listRecipes.subscribe(
  //     (message) => console.log(message),
  //     (error) => console.log(error)
  //   );
  //   console.log(listRecipes);
  //   return listRecipes;
  // }

  // getListRecipes(id): Observable<any> {
  //   // const id = this.route.snapshot.params['id'];
  //   // const savedRecipes = this.http.get(`${this.url}/show-recipes/${id}`);
  //   // return savedRecipes;
  //   const listRecipes = this.http.get(`${this.url}/show-recipes/${id}`);
  //   listRecipes.subscribe(
  //     (message) => console.log(message),
  //     (error) => console.log(error)
  //   );
  //   console.log(listRecipes);
  //   return listRecipes;
  // }

  getListRecipes(id): Observable<any> {
    // const id = this.route.snapshot.params['id'];
    // const savedRecipes = this.http.get(`${this.url}/show-recipes/${id}`);
    // return savedRecipes;
    // const listData = this.http.get(`${this.url}/show-recipes/${id}`);
    // listData.pipe(
    //   (message) => console.log(message),
    //   (error) => console.log(error)
    // );
    return this.http.get(`${this.url}/show-recipes/${id}`).pipe(
      map((data: Response) => {
        return data;
      })
    );
    // console.log(listData);
    // return listData;
  }

  // getListRecipes(): Observable<any> {
  //   return this.http.get(`${this.url}/show-recipes/`);
  // }

  deleteRecipe(id) {
    return this.http.delete(`${this.url}/remove-recipe/${id}`);
  }
  deleteList(id) {
    return this.http.delete(`${this.url}/remove-list/${id}`);
  }
}
