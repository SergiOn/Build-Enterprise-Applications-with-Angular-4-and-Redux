import { Action } from '@ngrx/store';
import { UPDATE } from '../actions';

export interface UpdateReducer<T> {
  (state: T, action: Action): T;
}

const INITIAL_STATE = null;

export const updateReducer: UpdateReducer<Date> = (state: Date = INITIAL_STATE, action: Action) => {

  switch (action.type) {
    case UPDATE:
      return new Date();

    default:
      return state;
  }
};
