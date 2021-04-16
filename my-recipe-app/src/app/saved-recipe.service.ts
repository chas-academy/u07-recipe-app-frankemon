import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class SavedRecipeService {
  // savedRecipes: any = [];
  savedRecipes: Recipe[] = [];

  constructor() { }

  // saveRecipe(event: any): void {
  //   this.savedRecipes.push(event.target.id);
  //   console.log(this.savedRecipes);
  // }

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
