import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class SavedRecipeService {
  savedRecipes: Recipe[] = [];
  favorite: Recipe;
  selectedButton: any;

  constructor() {}

  saveRecipe(recipe: Recipe) {
    this.selectedButton = this.savedRecipes;
    this.savedRecipes.push(recipe);
    recipe.favorite = true;
  }

  toggleFavorite(recipe: Recipe) {
    const foundRecipe = this.savedRecipes.find((r) => r.id === recipe.id);
    if (!foundRecipe) {
      this.saveRecipe(recipe);
    } else {
      this.deleteRecipe(recipe);
    }
  }

  deleteRecipe(recipe: Recipe): void {
    recipe.favorite = false;
    const foundRecipeIndex = this.savedRecipes.findIndex(
      (r) => r.id === recipe.id
    );
    if (foundRecipeIndex > -1) {
      this.savedRecipes.splice(foundRecipeIndex, 1);
    }
  }

  getSavedRecipes() {
    return this.savedRecipes;
  }
}
