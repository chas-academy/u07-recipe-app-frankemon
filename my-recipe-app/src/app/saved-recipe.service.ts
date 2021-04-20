import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class SavedRecipeService {
  savedRecipes: Recipe[] = [];

  constructor() {}

  saveRecipe(recipe: Recipe) {
    this.savedRecipes.push(recipe);
    console.log(this.savedRecipes);
  }

  deleteRecipe(i: any): void {
    this.savedRecipes.splice(i, 1);
    console.log(this.savedRecipes);
  }

  getSavedRecipes() {
    return this.savedRecipes;
  }
}
