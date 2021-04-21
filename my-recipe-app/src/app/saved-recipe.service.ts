import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RecipesComponent } from './recipes/recipes.component';

@Injectable({
  providedIn: 'root',
})
export class SavedRecipeService {
  savedRecipes: Recipe[] = [];

  displaySave = true;

  selectedButton: any;

  // savedRecipeCheck = true;

  constructor() {}

  saveRecipe(recipe: Recipe) {
    this.selectedButton = this.savedRecipes;
    this.savedRecipes.push(recipe);
    this.displaySave = false;
  }

  deleteRecipe(i: any): void {
    this.savedRecipes.splice(i, 1);
  }

  getSavedRecipes() {
    return this.savedRecipes;
  }
}
