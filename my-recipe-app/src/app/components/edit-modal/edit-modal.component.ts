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
import { List } from '../../List';

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
  id: any;
  listId: any;
  listTitle: any;

  constructor(
    private modalService: ModalService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.modalService.isOpenEdit.subscribe((listId) => this.change(listId));
  }

  onClose(): void {
    this.modalService.closeEditModal();
  }

  change(listId: List) {
    this.isOpen = listId != null;
    this.recipe = listId;
    if (listId) {
      this.onOpenEdit();
    }
  }

  // Add update functionality !!!

  handleEditList(listTitle: string): void {
    this.modalService.editList(listTitle);
  }

  // Gets users lists on open, into the modal
  onOpenEdit() {
    this.userService.getLists().subscribe((lists) => {
      this.lists = lists;
      this.currentList = lists[0];
      console.log(lists[0]);
    });
  }
}
