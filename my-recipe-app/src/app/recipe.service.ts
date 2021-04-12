import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import environment from '../environments/environment';

import { Observable, of } from 'rxjs';

import { Recipe } from './recipe';
// import { RecipeDetail } from './recipe-detail';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private spoonUrl = `https://api.spoonacular.com/recipes/`;
  private randomRecipesUrl = `https://api.spoonacular.com/recipes/random?number=3&apiKey=${environment.API_KEY}`;
  // private recipesInformationUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${environment.API_KEY}`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) // private recipe: Recipe
  // recipe: string
  { }
  /** GET recipes from the "server" */
  getRecipes(): Observable<any> {
    return this.http
      .get<any>(this.randomRecipesUrl)
      .pipe(map((data) => data.recipes));
  }
  getRecipe(id: number): Observable<Recipe> {
    // const url = `${this.recipesInformationUrl}/${id}`;
    const url = `${this.spoonUrl}/${id}/information?apiKey=${environment.API_KEY}`;
    return this.http.get<Recipe>(url).pipe(
      tap((_) => this.log(`fetched recipe id=${id}`)),
      catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
    );
  }
  private log(message: string) {
    this.messageService.add(`RecipeService: ${message}`);
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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
