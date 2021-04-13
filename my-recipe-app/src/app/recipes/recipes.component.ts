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
  ) {}

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

  filterVegetarian() {
    const vegetarianRecipes = this.recipes.filter((r) => r.vegetarian);
    console.log(vegetarianRecipes);
  }
  filterVegan() {
    const veganRecipes = this.recipes.filter((r) => r.vegan);
    console.log(veganRecipes);
  }
  filterGluten() {
    const glutenRecipes = this.recipes.filter((r) => r.glutenFree);
    console.log(glutenRecipes);
  }
  filterDairy() {
    const dairyRecipes = this.recipes.filter((r) => r.dairyFree);
    console.log(dairyRecipes);
  }
  // filterBreakfast() {
  //   const breakfastRecipes = this.recipes.filter((r) => r.XXX);
  //   console.log(breakfastRecipes);
  // }
  // filterLunch() {
  //   const lunchRecipes = this.recipes.filter((r) => r.XXX);
  //   console.log(lunchRecipes);
  // }
  // filterDinner() {
  //   const dinnerRecipes = this.recipes.filter((r) => r.XXX);
  //   console.log(dinnerRecipes);
  // }
  // filterDessert() {
  //   const dessertRecipes = this.recipes.filter((r) => r.XXX);
  //   console.log(dessertRecipes);
  // }
}
