import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import environment from '../environments/environment';

import { Observable, of } from 'rxjs';

import { Recipe } from './recipe';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipesUrl = `https://api.spoonacular.com/recipes/random?apiKey=${environment.API_KEY}`; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  /** GET recipes from the "server" */
  getRecipes(): Observable<any> {
    return this.http
      .get<any>(this.recipesUrl)
      .pipe(map((data) => data.recipes));
    tap((_) => this.log('fetched recipes')),
      catchError(this.handleError<Recipe[]>('getRecipes', []));
  }
  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.recipesUrl}/${id}`;
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
