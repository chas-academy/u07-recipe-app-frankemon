import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import environment from '../environments/environment';
import { Recipe } from './recipe';
import { List } from './List';
import { UserService } from './user.service';

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
  id: any;

  // Tracks whether modal is open or closed
  isOpen: BehaviorSubject<Recipe> = new BehaviorSubject(null);
  isOpenEdit: BehaviorSubject<List> = new BehaviorSubject(null);

  open(recipe) {
    this.isOpen.next(recipe);
    // console.log('open', recipe);
  }

  close() {
    this.isOpen.next(null);
    // console.log('close');
  }

  openEditModal(listId) {
    this.isOpenEdit.next(listId);
    console.log('open', listId);
    return (this.id = listId);
  }

  closeEditModal() {
    this.isOpenEdit.next(null);
    // console.log('close');
  }

  addRecipe(recipeId, listId, recipe) {
    const formData = new FormData();

    formData.append('list_id', listId);
    formData.append('title', recipe.title);
    formData.append('spoonacular_id', recipeId);

    const saveToConnect = this.http.post(`${this.url}/save-to-list`, formData);
    // console.log(recipe.title, recipeId, listId);
    saveToConnect.subscribe(
      (message) => console.log(message),
      (error) => console.log(error)
    );
  }

  editList(listTitle) {
    const formData = new FormData();

    // formData.append('id', id);
    formData.append('list_title', listTitle);

    const saveToConnect = this.http.post(
      `${this.url}/update-list/${this.id}`,
      formData
    );
    // console.log(recipe.title, recipeId, listId);
    saveToConnect.subscribe(
      (message) => console.log(message),
      (error) => console.log(error)
    );
  }
}
