import { Action } from '@ngrx/store';
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from '../actions';

export interface Reducer<T> {
  (state: T, action: Action): T;
}

export const todoReducer: Reducer<object> = (state: object = {}, action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return {};

    case UPDATE_TODO:
      return {};

    case REMOVE_TODO:
      return {};

    default:
      return state;
  }
};
