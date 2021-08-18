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
  listRecipes: any = [];
  id: any;
  savedRecipes: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) {
    // this.handleGetListRecipes(this.id);
    // console.log(this.listRecipes);
  }

  ngOnInit(): void {
    // this.listRecipes = this.handleGetListRecipes(this.id);
    // this.listRecipes = this.userService.getListRecipes(this.id);

    this.route.params.subscribe((params) => {
      this.getListRecipes(params['id']);
      console.log(params); //log the entire params object
      console.log(params['id']); //log the value of id
    });
    // console.log(this.listRecipes);
  }

  getListRecipes(id) {
    this.userService.getListRecipes(id).subscribe((data) => {
      this.listRecipes = Object.entries(data).map((e) => e[1]);
      console.log(Object.entries(data).map((e) => e[1]));
    });
    // console.log('handleListClick', id, this.lists, this.listRecipes);
  }

  // handleGetListRecipes(id) {
  //   // const id = this.route.snapshot.params['id'];
  //   this.userService
  //     .getListRecipes(id)
  //     .subscribe((listRecipes) => (this.listRecipes = listRecipes));
  //   // console.log(this.listRecipes);
  //   return this.listRecipes;
  // }

  deleteRecipe(id) {
    this.userService.deleteRecipe(id).subscribe(() => this.deleteRecipe(id));
  }
}
