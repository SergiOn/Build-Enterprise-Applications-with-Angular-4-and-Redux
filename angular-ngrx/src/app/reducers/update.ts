import { Action } from '@ngrx/store';
import { UPDATE_LAST_DATE } from '../actions';

export interface UpdateReducer<T> {
  (state: T, action: Action): T;
}

const INITIAL_STATE = null;

export const updateReducer: UpdateReducer<Date> = (state: Date = INITIAL_STATE, action: Action) => {

  switch (action.type) {
    case UPDATE_LAST_DATE:
      return new Date();

    default:
      return state;
  }
};
