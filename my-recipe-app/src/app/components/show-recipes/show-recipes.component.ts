import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../user.service';
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
  list: any;
  listTitle: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Sets the list ID as a param
    this.route.params.subscribe((params) => {
      this.getListRecipes(params['id']);
    });
  }

  getListRecipes(id) {
    // To array conversion
    this.userService.getListRecipes(id).subscribe((data) => {
      this.listRecipes = Object.entries(data).map((e) => e[1]);
    });
  }

  deleteRecipe(id) {
    this.userService.deleteRecipe(id).subscribe(() => this.deleteRecipe(id));
  }
}
