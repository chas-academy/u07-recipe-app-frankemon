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
  recipes: any = [];

  filters: any = [];

  dishTypes: Array<Recipe> = [];

  filteredRecipes: any[] = [];

  constructor(
    public recipeService: RecipeService,
    private messageService: MessageService,
    public savedRecipeService: SavedRecipeService
  ) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
      this.filteredRecipes = recipes;
      this.recipes.forEach((recipes: any) => console.log(recipes.dishTypes));
      console.log(this.filters);
      console.log(this.filteredRecipes);
    });

    const formattedRecipes = this.recipes.map((recipe: any[]) => ({
      ...recipe,
      ...recipe.dishTypes.reduce((accumulator: any, dishTypes: any) => {
        accumulator[dishTypes] = true;
        return accumulator;
      }, {}),
    }));
    this.recipes = formattedRecipes;
    this.filteredRecipes = formattedRecipes;
  }

  dishTypeFilterClicked(event: any): any {
    this.filterDiet(event);
    return;
  }

  filterDiet(event: any) {
    const { id, checked } = event.target;
    console.log(id, checked);
    if (checked) {
      this.filters = [...this.filters, id];
    } else {
      this.filters = this.filters.filter((diet: any) => diet !== id);
    }

    const minDietFilter = this.filters.length > 0;

    if (minDietFilter) {
      this.filteredRecipes = this.recipes.filter((recipe: any) => {
        const meetsDietCriteria = this.filters.every(
          (diet: any) => recipe[diet]
        );
        return meetsDietCriteria;
      });
    } else {
      this.filteredRecipes = this.recipes;
    }
  }
}
