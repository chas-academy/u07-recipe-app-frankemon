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

  constructor(
    public savedRecipeService: SavedRecipeService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.handleGetLists();
    // this.handleGetSavedRecipes();
    // this.handleGetSpoonId(this.listId);
  }
  // this.route.params.subscribe((params) => {
  //     this.id = params['id'];
  //   });

  ngOnInit(): void {
    // this.recipesList = this.savedRecipeService.getSavedRecipes();
  }

  removeRecipe(recipe: Recipe): void {
    this.savedRecipeService.deleteRecipe(recipe);
  }

  handleListClick(id) {
    this.userService.getListRecipes(id);
    console.log('handleListClick', id, this.lists);
  }

  handleGetLists() {
    this.userService.getLists().subscribe((lists) => (this.lists = lists));
    // this.listId = lists.id;
  }

  // handleGetSavedRecipes() {
  //   this.userService
  //     .getListRecipes()
  //     .subscribe((recipes) => (this.recipes = recipes));
  // }

  // handleGetSpoonId(listId) {
  //   this.userService
  //     .getSpoonId(listId)
  //     .subscribe((spoonId) => (this.spoonId = spoonId));
  // }
}
