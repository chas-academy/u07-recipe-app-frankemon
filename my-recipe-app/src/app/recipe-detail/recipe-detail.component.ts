import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RecipeService } from '../recipe.service';
import { SavedRecipeService } from '../saved-recipe.service';
import { Recipe } from '../recipe';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe?: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    public savedRecipeService: SavedRecipeService,
    private location: Location,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = this.route.snapshot.params['id'];
    this.recipeService
      .getRecipe(id)
      .subscribe((recipe) => (this.recipe = recipe));
  }

  goBack(): void {
    this.location.back();
  }

  save(recipe) {
    this.modalService.open(recipe);
  }
}
