import { Action } from '@ngrx/store';
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO, CLEAR_TODO } from '../actions';

export interface ITodoState {
  title: string,
  isCompleted: boolean,
  created: Date
}

export interface IAction extends Action {
  todo: ITodoState[]
}

export interface ITodoReducer<T> {
  (state: ITodoState[], action: Action, IAction): T;
}

const INITIAL_STATE = [];

export const todoReducer: ITodoReducer<ITodoState[]> = (state: ITodoState[] = INITIAL_STATE, action: IAction) => {

  switch (action.type) {
    case ADD_TODO:
      return state;

    case UPDATE_TODO:
      return state;

    case REMOVE_TODO:
      return state;

    case CLEAR_TODO:
      return state;

    default:
      return state;
  }
};
