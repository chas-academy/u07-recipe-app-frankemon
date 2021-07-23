import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LayoutState } from './layout.reducer';
import * as fromActions from './layout.actions';
import * as fromSelectors from './layout.selectors';

@Injectable()
export class LayoutFacade {
  modalState$ = this.store.pipe(select(fromSelectors.selectModalStatus));

  constructor(private store: Store<LayoutState>) {}

  openModal() {
    this.store.dispatch(fromActions.openModal());
  }

  closeModal() {
    this.store.dispatch(fromActions.closeModal());
    // setTimeout(() => this.openModal(), 1000);
  }
}
