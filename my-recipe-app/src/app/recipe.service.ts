import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import environment from '../environments/environment';

import { Observable, of } from 'rxjs';

import { Recipe } from './recipe';
// import { Recipes } from './recipes';
// import { RecipeDetail } from './recipe-detail';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private spoonUrl = `https://api.spoonacular.com/recipes/`;
  private spoonFeaturedUrl = `https://api.spoonacular.com/recipes/random?number=1&apiKey=${environment.API_KEY}`;
  private spoonSuggestedUrl = `https://api.spoonacular.com/recipes/random?number=4&apiKey=${environment.API_KEY}`;
  private randomRecipesUrl = `https://api.spoonacular.com/recipes/random?number=3&apiKey=${environment.API_KEY}`;

  // private spoonFeaturedUrl = `https://api.spoonacular.com/recipes/informationBulk?ids=646905,646905&apiKey=${environment.API_KEY}`;

  constructor(private http: HttpClient) {}

  /** GET recipes from the server */
  getFeaturedRecipe(): Observable<any> {
    return this.http
      .get<any>(this.spoonFeaturedUrl)
      .pipe(map((data) => data.recipes));
  }

  getSuggestedRecipes(): Observable<any> {
    return this.http
      .get<any>(this.spoonSuggestedUrl)
      .pipe(map((data) => data.recipes));
  }

  getRecipes(): Observable<any> {
    return this.http
      .get<any>(this.randomRecipesUrl)
      .pipe(map((data) => data.recipes));
  }

  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.spoonUrl}/${id}/information?apiKey=${environment.API_KEY}`;
    return this.http.get<Recipe>(url).pipe(
      tap((_) => console.log(`fetched recipe id=${id}`)),
      catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
