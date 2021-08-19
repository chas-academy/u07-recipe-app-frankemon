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

  listTitle: any;
  id: any;

  // Tracks whether modal is open or closed
  isOpen: BehaviorSubject<Recipe> = new BehaviorSubject(null);
  isOpenEdit: BehaviorSubject<List> = new BehaviorSubject(null);

  open(recipe) {
    this.isOpen.next(recipe);
  }

  close() {
    this.isOpen.next(null);
  }

  openEditModal(listId) {
    this.isOpenEdit.next(listId);
    console.log('open', listId);
    return (this.id = listId);
  }

  closeEditModal() {
    this.isOpenEdit.next(null);
  }

  addRecipe(recipeId, listId, recipe) {
    const formData = new FormData();

    formData.append('list_id', listId);
    formData.append('title', recipe.title);
    formData.append('spoonacular_id', recipeId);

    const saveToConnect = this.http.post(`${this.url}/save-to-list`, formData);
    saveToConnect.subscribe(
      (message) => console.log(message),
      (error) => console.log(error)
    );
    this.close();
  }

  editList(listTitle) {
    const formData = new FormData();

    formData.append('list_title', listTitle);

    const updateList = this.http.post(
      `${this.url}/update-list/${this.id}`,
      formData
    );
    updateList.subscribe(
      (message) => console.log(message),
      (error) => console.log(error)
    );
    this.closeEditModal();
  }
}
