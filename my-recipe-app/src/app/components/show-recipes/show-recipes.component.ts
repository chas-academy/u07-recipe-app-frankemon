import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../user.service';
import { SavedRecipeComponent } from '../../saved-recipe/saved-recipe.component';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-show-recipes',
  templateUrl: './show-recipes.component.html',
  styleUrls: ['./show-recipes.component.sass'],
})
export class ShowRecipesComponent implements OnInit {
  faTimes = faTimes;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) {
    this.handleGetListRecipes();
  }
  listRecipes: any;
  id: any;
  savedRecipes: any;
  ngOnInit(): void {}

  handleGetListRecipes() {
    // const id = this.route.snapshot.params['id'];
    this.userService
      .getListRecipes()
      .subscribe((listRecipes) => (this.listRecipes = listRecipes));
    console.log(this.listRecipes);
    return this.listRecipes;
  }
}
