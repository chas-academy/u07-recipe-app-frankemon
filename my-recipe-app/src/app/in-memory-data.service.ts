import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
    { id: 1, name: 'Burger' },
    { id: 3, name: 'Nachos' },
    { id: 4, name: 'Burrito' },
    { id: 5, name: 'Carbonara' },
    { id: 6, name: 'Meatballs' },
    { id: 7, name: 'Red Lobster' },
    { id: 8, name: 'Dulce de Leche' },
    { id: 9, name: 'Dumplings' },
    { id: 10, name: 'Marinated Pork' },
    { id: 11, name: 'Tortellini' }
    ];
    return {recipes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(recipes: Recipe[]): number {
    return recipes.length > 0 ? Math.max(...recipes.map(recipe => recipe.id)) + 1 : 11;
  }
}