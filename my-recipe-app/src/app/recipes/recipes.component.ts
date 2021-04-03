import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass']
})
// export class RecipesComponent implements OnInit {
//   recipe: Recipe = {
//     id: 1,
//     name: 'pizza'
//   }
export class RecipesComponent implements OnInit {

  recipes = RECIPES;
  selectedRecipe?: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
