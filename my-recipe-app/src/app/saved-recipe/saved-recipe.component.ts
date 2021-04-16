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
  constructor(private savedRecipeService: SavedRecipeService) { }

  ngOnInit(): void {
    this.recipesList = this.savedRecipeService.getSavedRecipes();
  }
  removeRecipe(e: number): void {
    this.savedRecipeService.deleteRecipe(e);
  }
}

// save each recipe as an object? can make it easier than trying to fix logic
