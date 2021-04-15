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
  recipes = [];

  filters: any = [];

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
    });
  }

  filterClicked(event: any) {
    const { id, checked } = event.target;
    console.log(id, checked);
    if (checked) {
      this.filters = [...this.filters, id];
    } else {
      this.filters = this.filters.filter((diet: any) => diet !== id);
    }

    const atLeastOneFilterActive = this.filters.length > 0;

    if (atLeastOneFilterActive) {
      this.filteredRecipes = this.recipes.filter((recipe) => {
        const fulfillsAllCriterias = this.filters.every(
          (diet: any) => recipe[diet]
        );
        return fulfillsAllCriterias;
      });
    } else {
      this.filteredRecipes = this.recipes;
    }
  }
}
