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

  removeRecipe(event: any): void {
    this.savedRecipes.splice(event.target.id);
    console.log(this.savedRecipes);
  }
}
