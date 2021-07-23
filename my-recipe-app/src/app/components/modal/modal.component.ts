import { Component, OnInit } from '@angular/core';
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
import { LayoutFacade } from '../../+state/layout.facade';

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
  modalState$ = this.layoutFacade.modalState$;

  constructor(private layoutFacade: LayoutFacade) {}

  private readonly unsubscribe$ = new Subject();

  ngOnInit(): void {
    this.modalState$.pipe(take(1)).subscribe((isOpen) => {
      if (!isOpen) {
        this.layoutFacade.openModal();
      }
    });
    fromEvent(document, 'keydown')
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(
          (event) => event instanceof KeyboardEvent && event.code === 'Escape'
        ),
        withLatestFrom(this.modalState$)
      )
      .subscribe(([_, modalIsOpen]) => {
        if (modalIsOpen) {
          this.layoutFacade.closeModal();
        }
      });
  }

  onClose(): void {
    this.layoutFacade.closeModal();
  }
}
