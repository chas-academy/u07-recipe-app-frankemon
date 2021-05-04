import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  recipes: Recipe[] = [];
  suggestedRecipes: Recipe[] = [];
  featuredRecipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    if (this.recipes.length === 0) {
      this.getRecipes();
      this.getSuggestedRecipes();
      this.getFeaturedRecipe();
    }
  }

  getSuggestedRecipes() {
    this.recipeService
      .getSuggestedRecipes()
      .subscribe((recipes) => (this.suggestedRecipes = recipes));
  }

  getFeaturedRecipe() {
    this.recipeService
      .getFeaturedRecipe()
      .subscribe((recipes) => (this.featuredRecipes = recipes));
  }

  getRecipes(): void {
    this.recipeService
      .getRecipes()
      .subscribe((recipes) => (this.recipes = recipes));
  }
}
