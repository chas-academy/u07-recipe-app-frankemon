import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { SavedRecipeComponent } from './saved-recipe/saved-recipe.component';
// import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // { path: '', redirectTo: '/landingpage', pathMatch: 'full' },
  { path: '', component: LandingpageComponent, pathMatch: 'full' },
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'start', component: DashboardComponent },
  { path: 'detail/:id', component: RecipeDetailComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'saved-recipes', component: SavedRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
