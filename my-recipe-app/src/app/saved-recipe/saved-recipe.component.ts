import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { SavedRecipeService } from '../saved-recipe.service';
import { User } from '../components/user-profile/user-profile.component';
import { List } from '../List';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
  id: any;
  faTimes = faTimes;
  listRecipes: any;
  isLoading: boolean = false;

  constructor(
    public savedRecipeService: SavedRecipeService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.handleGetLists();
  }

  ngOnInit(): void {}

  removeRecipe(recipe: Recipe): void {
    this.savedRecipeService.deleteRecipe(recipe);
  }

  // handleListClick(id) {
  //   this.userService.getListRecipes(id).subscribe((data) => {
  //     this.listRecipes = data;
  //   });
  //   console.log('handleListClick', id, this.lists, this.listRecipes);
  // }

  handleGetLists() {
    this.isLoading = true;
    this.userService.getLists().subscribe((lists) => {
      this.isLoading = false;
      this.lists = lists;
    });
  }

  setIsLoading() {
    this.isLoading = true;
    console.log('hello');
  }

  deleteList(id) {
    this.userService.deleteList(id).subscribe(() => this.handleGetLists());
  }
}
