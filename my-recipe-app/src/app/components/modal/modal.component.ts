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

  constructor(
    private modalService: ModalService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.modalService.isOpen.subscribe((isOpen) => this.change(isOpen));
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: any) {
    this.onClose();
  }

  onClose(): void {
    this.modalService.close();
  }

  change(isOpen: boolean) {
    this.isOpen = isOpen;
    if (isOpen) {
      this.onOpen();
    }
  }

  addRecipe(recipe): void {
    this.modalService.addRecipe(recipe);
  }

  onOpen() {
    this.userService.getLists().subscribe((lists) => {
      this.lists = lists;
      this.currentList = lists[0];
    }); // Gets users lists on open
  }

  handleSelect() {
    console.log(this.currentList);
  }
}
