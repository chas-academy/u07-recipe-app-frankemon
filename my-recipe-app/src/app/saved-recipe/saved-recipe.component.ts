import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { SavedRecipeService } from '../saved-recipe.service';
import { User } from '../components/user-profile/user-profile.component';

@Component({
  selector: 'app-saved-recipe',
  templateUrl: './saved-recipe.component.html',
  styleUrls: ['./saved-recipe.component.sass'],
})
export class SavedRecipeComponent implements OnInit {
  recipesList: any;
  User: User;

  constructor(public savedRecipeService: SavedRecipeService) {}

  ngOnInit(): void {
    this.recipesList = this.savedRecipeService.getSavedRecipes();
  }

  removeRecipe(recipe: Recipe): void {
    this.savedRecipeService.deleteRecipe(recipe);
  }
}
