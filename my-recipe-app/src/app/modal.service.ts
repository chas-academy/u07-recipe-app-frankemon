import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);

  // open(recipeId) {  can either pass id or title. bonus points for link, maybe use data behavioursubject
  open() {
    // this.recipeId.next(recipeId);
    this.isOpen.next(true);
    console.log('open');
  }

  close() {
    this.isOpen.next(false);
    console.log('close');
  }

  constructor() {}
}
