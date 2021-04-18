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

  typeFilters: any = [];

  typesFiltered: any = [];

  dishTypeFilters: any = [];
  dishTypes: Array<string> = [];

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
      this.filteredRecipes = this.recipes.filter((recipe) => {
        const meetsDietCriteria = this.filters.every(
          (diet: any) => recipe[diet]
        );
        return meetsDietCriteria;
      });
    } else {
      this.filteredRecipes = this.recipes;
    }
  }

  filterType(event: any) {
    const { id, checked } = event.target;
    console.log(id, checked);
    if (checked) {
      this.typeFilters = [...this.typeFilters, id];
    } else {
      this.typeFilters = this.typeFilters.filter(
        (dishType: any) => dishType !== id
      );
    }

    const minTypeFilter = this.filters.length > 0;

    if (minTypeFilter) {
      this.filteredRecipes = this.recipes.filter((recipe) => {
        const meetsTypeCriteria = this.filters.every(
          (dishType: any) => recipe[dishType]
        );
        return meetsTypeCriteria;
      });
    } else {
      this.filteredRecipes = this.recipes;
    }
    // this.recipes.forEach((recipe) => {
    //   recipe.dishTypes.forEach((dishType: any) => {
    //     const matches = this.dishTypeFilters.includes(dishType);
    //     const matchingTypes: any = [];
    //     if (matches) {
    //       matchingTypes.push(recipe);
    //       console.log(matchingTypes);
    //       return matchingTypes;
    //     }
    //   });
    // });
    // } else {
    //   this.typesFiltered = this.recipes;
    // }

    // filterCompare = (array: any) => {
    //   if (a.length !== b.length) return false;
    //   const uniqueValues = new Set([...a, ...b]);
    //   for (const v of uniqueValues) {
    //     const aCount = a.filter((e) => e === v).length;
    //     const bCount = b.filter((e) => e === v).length;
    //     if (aCount !== bCount) return false;
    //   }
    //   return true;
    // };

    // splitTypes() {
    //   const type = this.recipe.split(this.dishTypes);
    //   const splitTypes = this.dishTypes.split(' ', 5);
    //   console.log(splitTypes);
    // }
  }
}
