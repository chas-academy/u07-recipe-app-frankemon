import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { SavedRecipeService } from '../saved-recipe.service';
import { User } from '../components/user-profile/user-profile.component';
import { List } from '../List';
import { UserService } from '../user.service';

@Component({
  selector: 'app-saved-recipe',
  templateUrl: './saved-recipe.component.html',
  styleUrls: ['./saved-recipe.component.sass'],
})
export class SavedRecipeComponent implements OnInit {
  recipesList: any;
  User: User;
  lists: any; // Array of lists
  recipes: any;
  spoonId: any;
  recipe_ids: any;
  listId: any;
  results: any;
  result: any;

  constructor(
    public savedRecipeService: SavedRecipeService,
    private userService: UserService
  ) {
    this.handleGetLists();
    this.handleGetSavedRecipes();
    // this.handleGetSpoonId(this.listId);
  }

  ngOnInit(): void {
    this.recipesList = this.savedRecipeService.getSavedRecipes();
  }

  removeRecipe(recipe: Recipe): void {
    this.savedRecipeService.deleteRecipe(recipe);
  }

  handleGetLists() {
    this.userService.getLists().subscribe((lists) => (this.lists = lists));
    // this.listId = lists.id;
  }

  handleGetSavedRecipes() {
    this.userService
      .getSavedRecipes()
      .subscribe((recipes) => (this.recipes = recipes));
  }

  // handleGetSpoonId(listId) {
  //   this.userService
  //     .getSpoonId(listId)
  //     .subscribe((spoonId) => (this.spoonId = spoonId));
  // }
}
