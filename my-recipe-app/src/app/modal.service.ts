import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import environment from '../environments/environment';
import { Recipe } from './recipe';
import { UserService } from './user.service';
import { List } from './List';
import { ListItem } from './ListItem';
import { RecipeService } from './recipe.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { ModalComponent } from './components/modal/modal.component';

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

  isOpen: BehaviorSubject<Recipe> = new BehaviorSubject(null);

  // open(recipeId) {  can either pass id or title. bonus points for link, maybe use data behavioursubject
  open(recipe) {
    this.isOpen.next(recipe);
    console.log('open', recipe);
  }

  close() {
    this.isOpen.next(null);
    console.log('close');
  }

  addRecipe(recipeId, listId) {
    const formData = new FormData();

    formData.append('list_id', listId);
    formData.append('recipe_id', recipeId);

    const saveRecipe = this.http.post(`${this.url}/save-to-list`, formData);
    console.log(listId, recipeId);
    saveRecipe.subscribe(
      (message) => console.log(message),
      (error) => console.log(error)
    );
  }

  // addRecipe(recipe) {
  //   console.log('Create list button connected', recipe);
  //   const formData = new FormData();

  //   formData.append('id', recipe);

  //   const addRecipe = this.http.post(
  //     `${this.url}/add-recipe/`,
  //     formData,
  //     recipe
  //   );
  //   addRecipe.subscribe(
  //     (message) => console.log(message),
  //     (error) => console.log(error)
  //   );
  // }
}
