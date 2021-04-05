import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  constructor(private messageService: MessageService) { }

  getRecipes(): Observable<Recipe[]> {
    const recipes = of(RECIPES);
    this.messageService.add('RecipeService: fetched recipes')
    return recipes;
  }

  getRecipe(id: number): Observable<Recipe> {
    const recipe = RECIPE.find(h => h.id === id) as Recipe;
    this.messageService.add(`RecipeService: fetched recipe id=${id}`);
    return of(recipe);
  }
}
