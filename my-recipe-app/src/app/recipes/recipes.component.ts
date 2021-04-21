import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { MessageService } from '../message.service';
import { SavedRecipeService } from '../saved-recipe.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass'],
})
export class RecipesComponent implements OnInit {
  recipes: any[] = [];

  filters: any = [];

  filteredRecipes: any[] = [];

  displaySave = true;

  showAllRecipes = true;

  toggleSave = true;

  constructor(
    public recipeService: RecipeService,
    private messageService: MessageService,
    public savedRecipeService: SavedRecipeService
  ) {}

  ngOnInit(): void {
    this.getRecipes();
  }
  // Gets recipes, prints them out according to filter options
  getRecipes(): void {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
      this.filteredRecipes = recipes;
      this.filterDishType();
      console.log(this.showAllRecipes);
    });
  }
  // Adds dishType as a filter type, combines with diet filter below so user can filter by diet AND dish type
  filterDishType(): void {
    const recipesByType = this.recipes.map((recipe: any) => ({
      ...recipe,
      ...recipe.dishTypes.reduce((accumulator: any, dishType: any) => {
        accumulator[dishType] = true;
        return accumulator;
      }, {}),
    }));

    this.recipes = recipesByType;
    this.filteredRecipes = recipesByType;
  }

  // Adds filter by diet which in turn adds diet types to an array, is combined with dishType filter above
  filterDiet(event: any) {
    const { id, checked } = event.target;
    if (checked) {
      this.filters = [...this.filters, id];
    } else {
      this.filters = this.filters.filter((diet: any) => diet !== id);
    }
    // Resets the filtering array incase there are no boxes checked
    const minimumDietFilter = this.filters.length > 0;

    if (minimumDietFilter) {
      this.filteredRecipes = this.recipes.filter((recipe: any) => {
        const meetsDietCriteria = this.filters.every(
          (diet: any) => recipe[diet]
        );
        return meetsDietCriteria;
      });
    } else {
      this.filteredRecipes = this.recipes;
    }
    if (this.filteredRecipes.length > 0) {
      this.showAllRecipes = true;
    } else {
      this.showAllRecipes = false;
    }
  }
}
