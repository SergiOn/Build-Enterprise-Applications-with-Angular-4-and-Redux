import { tassign } from 'tassign';
import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO, CLEAR_TODO } from './actions';

export interface IAppState {
  todo: Array<object[]> | [{
    name: string,
    isCompleted: boolean,
    created: Date
  }],
  date: Date | null
}

export interface IAppAction {
  type: string,
  todo: {
    name: string,
    isCompleted: boolean,
    created: Date
  }
}

export const INITIAL_STATE: IAppState = {
  todo: [],
  date: null
};

export function rootReducer(state: IAppState, action): IAppState {
  console.log(state, action);

  switch (action.type) {
    case ADD_TODO:
      return state;

    case COMPLETE_TODO:
      return state;

    case REMOVE_TODO:
      return state;

    case CLEAR_TODO:
      return state;

    default:
      return state;
  }
}

