import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];


  constructor(
    public recipeService: RecipeService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  filterRecipes() {
    // const diet = ['vegan', 'vegetarian', 'glutenFree', 'dairyFree']
    // const diet = 'dairyFree';
    // this.recipes.filter(item => item.diet === diet);
    this.recipeService.filterRecipes(this.recipes);
    console.log('hello');
    // return this.recipes;
  }
}
