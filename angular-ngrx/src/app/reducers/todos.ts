import { Action } from '@ngrx/store';
import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO, CLEAR_TODO } from '../actions';

export interface ITodoState {
  id?: number,
  title: string,
  isCompleted: boolean,
  created: Date
}

interface IAction extends Action {
  payload: ITodoState
}

interface ITodoReducer<T> {
  (state: T, action: Action, IAction): T;
}

const INITIAL_STATE = [];

export const todoReducer: ITodoReducer<ITodoState[]> = (state: ITodoState[] = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(state);
      console.log(action);

      return [...state, {id: state.length + 1, ...action.payload}];

    case COMPLETE_TODO: {
      console.log(state);
      console.log(action);

      const index = state.indexOf(action.payload);
      return [
        ...state.slice(0, index),
        {...action.payload, isCompleted: !action.payload.isCompleted},
        ...state.slice(index + 1)
      ];
    }

    case REMOVE_TODO: {
      console.log(state);
      console.log(action);

      const index = state.indexOf(action.payload);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }

    case CLEAR_TODO:
      console.log(state);
      console.log(action);

      return [];

    default:
      console.log(state);
      console.log(action);

      return state;
  }
};
