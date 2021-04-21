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

  showSavedRecipes = true;
  // savedRecipeCheck: any;

  constructor(public savedRecipeService: SavedRecipeService) {}

  ngOnInit(): void {
    this.recipesList = this.savedRecipeService.getSavedRecipes();
  }

  removeRecipe(e: number): void {
    this.savedRecipeService.deleteRecipe(e);
  }

  // userSavedRecipes(array: any) {
  //   if (this.savedRecipeCheck.length === 0) {
  //     this.savedRecipeCheck = false;
  //   } else {
  //     this.savedRecipeCheck = true;
  //   }
  // }
}
