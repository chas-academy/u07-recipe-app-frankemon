import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LayoutState, layoutFeatureKey } from './layout.reducer';

const layoutFeatureSlice = createFeatureSelector<LayoutState>(layoutFeatureKey);

export const selectModalStatus = createSelector(
  layoutFeatureSlice,
  (state: LayoutState) => state.modalIsOpen
);
