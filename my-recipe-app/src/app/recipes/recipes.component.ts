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
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  // filterRecipes() {
    // const diet = ['vegan', 'vegetarian', 'glutenFree', 'dairyFree']
    // const diet = 'vegetarian';
    // this.recipes.filter(item => item.diet === diet);
    // this.recipeService.filterRecipes(this.recipes);
    // console.log('log from component');
    // console.log(this.recipes);
    // return this.recipes;
  // }

  filterVegan(recipes: any) {
    const vegan = 'vegan';
    // recipes.vegan = !recipes.vegan;
    recipes.filter((recipe: { vegan: boolean; }) => recipes.vegan === vegan);
    console.log(recipes.vegan);
    console.log(recipes);
  }
  filterVegetarian(recipes: any) {
    recipes.filter((recipe: { vegetarian: boolean; }) => recipes.vegetarian === true);
    // const vegetarian = 'vegetarian';
    // recipes.vegan = !recipes.vegan;
    // const result = recipes.filter((recipe: { vegetarian: boolean; }) => recipes.vegetarian === true);
    // console.log(result);
    // console.log(recipes);
  }
let result = filterVegetarian(recipes);

// }
    

