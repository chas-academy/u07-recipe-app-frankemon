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
import { ModalService } from '../../modal.service';
import { UserService } from '../../user.service';
import { Recipe } from 'src/app/recipe';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.sass'],
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
export class EditModalComponent implements OnInit {
  isOpen = false;
  lists: any;
  currentList: any;
  recipe: any;
  title: any;
  listName: any;

  constructor(
    private modalService: ModalService,
    private userService: UserService
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

  handleEditList(listId, recipe): void {
    this.modalService.addRecipe(this.recipe.id, listId, recipe);
  }

  // Gets users lists on open, into the modal
  onOpen() {
    this.userService.getLists().subscribe((lists) => {
      this.lists = lists;
      this.currentList = lists[0];
    });
  }
}
