import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from './layout.actions';

export const layoutFeatureKey = 'layout';

export interface LayoutState {
  modalIsOpen: boolean;
}

const initialState: LayoutState = {
  modalIsOpen: false,
};

const appReducer = createReducer(
  initialState,
  on(fromActions.openModal, (state) => ({
    ...state,
    modalIsOpen: true,
  })),
  on(fromActions.closeModal, (state) => ({
    ...state,
    modalIsOpen: false,
  }))
);

export const reducer = (state: LayoutState | undefined, action: Action) =>
  appReducer(state, action);
