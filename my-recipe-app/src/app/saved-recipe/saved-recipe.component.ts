import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { SavedRecipeService } from '../saved-recipe.service';
import { User } from '../components/user-profile/user-profile.component';
import { UserService } from '../user.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-saved-recipe',
  templateUrl: './saved-recipe.component.html',
  styleUrls: ['./saved-recipe.component.sass'],
})
export class SavedRecipeComponent implements OnInit {
  recipesList: any;
  User: User;
  lists: any; // Array of lists
  faTimes = faTimes;
  faPencilAlt = faPencilAlt;
  listRecipes: any;
  isLoading: boolean = false;
  list: any;

  constructor(
    public savedRecipeService: SavedRecipeService,
    private userService: UserService,
    private modalService: ModalService
  ) {
    this.handleGetLists();
  }

  ngOnInit(): void {}

  removeRecipe(recipe: Recipe): void {
    this.savedRecipeService.deleteRecipe(recipe);
  }

  handleGetLists() {
    this.isLoading = true;
    this.userService.getLists().subscribe((lists) => {
      this.isLoading = false;
      this.lists = lists;
    });
  }

  setIsLoading() {
    this.isLoading = true;
  }

  handleOpenEditModal(list) {
    this.modalService.openEditModal(list);
  }

  deleteList(id) {
    this.userService.deleteList(id).subscribe(() => this.handleGetLists());
  }
}
