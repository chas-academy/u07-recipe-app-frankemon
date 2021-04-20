import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RecipesComponent } from './recipes/recipes.component';

@Injectable({
  providedIn: 'root',
})
export class SavedRecipeService {
  savedRecipes: Recipe[] = [];

  constructor() {}

  saveRecipe(recipe: Recipe) {
    this.savedRecipes.push(recipe);
    // recipe.displaySave = false;
  }

  deleteRecipe(i: any): void {
    this.savedRecipes.splice(i, 1);
  }

  getSavedRecipes() {
    return this.savedRecipes;
  }
}
