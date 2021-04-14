import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SavedRecipeService {
  savedRecipes: any = [];

  constructor() {}

  saveRecipe(event: any): void {
    this.savedRecipes.push(event.target.id);
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
