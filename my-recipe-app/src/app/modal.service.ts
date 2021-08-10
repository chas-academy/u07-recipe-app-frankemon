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
  recipe: Recipe;
  // recipeData: [any, any];
  // recipeData: ListItem;
  // recipeData: ListItem[] = [];
  recipeData: any;

  isOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);

  // open(recipeId) {  can either pass id or title. bonus points for link, maybe use data behavioursubject
  open(recipe) {
    // this.recipeId.next(recipeId);
    this.isOpen.next(true);
    console.log('open');
    this.recipeData = recipe;
    console.log(this.recipeData);
  }

  // getRecipeData() {
  //   console.log(this.recipeData);
  //   return this.recipeData;
  // }

  close() {
    this.isOpen.next(false);
    console.log('close');
  }

  addRecipe(recipeData) {
    const saveRecipe = this.http.post(`${this.url}/add-recipe/`, recipeData);
    console.log(saveRecipe, recipeData);
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
