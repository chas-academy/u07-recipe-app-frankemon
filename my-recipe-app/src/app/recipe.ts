export interface Recipe {
  id: number;
  title: string;
  image: string;
  summary: string;
  servings: number;
  readyInMinutes: number;
  extendedIngredients: object;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  dishTypes: string[];
  instructions: string;
}
