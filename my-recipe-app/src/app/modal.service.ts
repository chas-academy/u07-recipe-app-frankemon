import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import environment from '../environments/environment';
import { Recipe } from './recipe';
import { UserService } from './user.service';
import { List } from './List';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private http: HttpClient, private userService: UserService) {}

  url = environment.API_URL;
  accessToken = localStorage.getItem('accessToken');
  authHeader = `Bearer ${this.accessToken}`;
  contentType = 'application/json';

  lists: any; // Array of lists

  isOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);

  // open(recipeId) {  can either pass id or title. bonus points for link, maybe use data behavioursubject
  open() {
    // this.recipeId.next(recipeId);
    this.isOpen.next(true);
    console.log('open');
  }

  close() {
    this.isOpen.next(false);
    console.log('close');
  }

  addRecipe(recipe) {
    const saveRecipe = this.http.get(`${this.url}/add-recipe/`, recipe);
    console.log(saveRecipe);
    saveRecipe.subscribe(
      (message) => console.log(message),
      (error) => console.log(error)
    );
  }
}
