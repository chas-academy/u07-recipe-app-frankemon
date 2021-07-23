import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { SavedRecipeComponent } from './saved-recipe/saved-recipe.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ModalComponent } from './components/modal/modal.component';

// const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RecipesComponent,
    RecipeDetailComponent,
    MessagesComponent,
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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
