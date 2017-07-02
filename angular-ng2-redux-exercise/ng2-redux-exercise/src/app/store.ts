import { tassign } from 'tassign';
import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO, CLEAR_TODO } from './actions';

export interface IAppState {
  todo: Array<object> | [{
    name: string,
    isCompleted: boolean,
    created: Date
  }],
  lastUpdate: Date | null
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
  lastUpdate: null
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case ADD_TODO:
      return tassign(state, {
        todo: [...state.todo, ...action.todo],
        lastUpdate: action.lastUpdate
      });

    case COMPLETE_TODO:
      return state;

    case REMOVE_TODO:
      return state;

    case CLEAR_TODO:
      return tassign(state, {
        todo: [],
        lastUpdate: action.lastUpdate
      });

    default:
      return state;
  }
}

