import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import { StoreModule } from '@ngrx/store';

import { AuthInterceptor } from './shared/auth.interceptor';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SavedRecipeComponent } from './saved-recipe/saved-recipe.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './modal.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RecipesComponent,
    RecipeDetailComponent,
    HeaderComponent,
    FooterComponent,
    SavedRecipeComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    LandingpageComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    [ModalService],
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
