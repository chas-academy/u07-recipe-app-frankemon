import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  transition,
  query,
  animateChild,
  state,
  style,
  animate,
  group,
} from '@angular/animations';
import { fromEvent, Subject } from 'rxjs';
import { filter, take, takeUntil, withLatestFrom } from 'rxjs/operators';
// import { ModalService } from 'src/app/modal.service';
import { ModalService } from '../../modal.service';
import { UserService } from '../../user.service';
import { Recipe } from 'src/app/recipe';
import { RecipeDetailComponent } from 'src/app/recipe-detail/recipe-detail.component';
import { SavedRecipeComponent } from 'src/app/saved-recipe/saved-recipe.component';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
  animations: [
    trigger('modalContainer', [
      transition(':enter', [
        group([
          query('@modalOverlay', animateChild()),
          query('@modalContent', animateChild()),
        ]),
      ]),

      transition(
        ':leave',
        group([
          query('@modalOverlay', animateChild()),
          query('@modalContent', animateChild()),
        ])
      ),
    ]),

    trigger('modalOverlay', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),

      state(
        '*',
        style({
          opacity: 1,
        })
      ),

      transition(':enter', [animate('300ms ease-out')]),
      transition(':leave', [animate('100ms ease-in')]),
    ]),

    trigger('modalContent', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'scale(0.95)',
        })
      ),

      state(
        '*',
        style({
          opacity: 1,
          transform: 'scale(1)',
        })
      ),

      transition(':enter', [animate('300ms ease-out')]),
      transition(':leave', [animate('200ms ease-in')]),
    ]),
  ],
})
export class ModalComponent implements OnInit {
  isOpen = false;
  lists: any;
  currentList: any;
  recipeId: any;
  id: any;
  recipe: any;
  title: any;
  // recipeData: any = this.modalService.getRecipeData();

  constructor(
    private modalService: ModalService,
    private userService: UserService,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.modalService.isOpen.subscribe((recipe) => this.change(recipe));
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: any) {
    this.onClose();
  }

  onClose(): void {
    this.modalService.close();
  }

  change(recipe: Recipe) {
    this.isOpen = recipe != null;
    this.recipe = recipe;
    if (recipe) {
      this.onOpen();
    }
  }

  addRecipe(listId): void {
    this.modalService.addRecipe(this.recipe.id, listId);
  }

  // Gets users lists on open
  onOpen() {
    this.userService.getLists().subscribe((lists) => {
      this.lists = lists;
      this.currentList = lists[0];
    });
  }

  handleSelect() {
    console.log(this.currentList);
  }
}
