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
  // List: List;

  constructor(
    public savedRecipeService: SavedRecipeService,
    private userService: UserService
  ) {
    this.handleGetLists();
  }

  ngOnInit(): void {
    this.recipesList = this.savedRecipeService.getSavedRecipes();
  }

  removeRecipe(recipe: Recipe): void {
    this.savedRecipeService.deleteRecipe(recipe);
  }

  handleGetLists() {
    this.userService.getLists().subscribe((lists) => (this.lists = lists));
    // showLists.subscribe(
    //   (message) => console.log(message),
    //   (error) => console.log(error)
    // );
  }
}
