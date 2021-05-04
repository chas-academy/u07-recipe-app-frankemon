import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { SavedRecipeService } from '../saved-recipe.service';

@Component({
  selector: 'app-saved-recipe',
  templateUrl: './saved-recipe.component.html',
  styleUrls: ['./saved-recipe.component.sass'],
})
export class SavedRecipeComponent implements OnInit {
  recipesList: any;

  constructor(public savedRecipeService: SavedRecipeService) {}

  ngOnInit(): void {
    this.recipesList = this.savedRecipeService.getSavedRecipes();
  }

  removeRecipe(recipe: Recipe): void {
    this.savedRecipeService.deleteRecipe(recipe);
  }
}
