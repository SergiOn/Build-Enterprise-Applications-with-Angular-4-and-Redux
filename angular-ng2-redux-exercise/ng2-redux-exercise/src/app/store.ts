import { tassign } from 'tassign';

export interface IAppState {
  todo: Array<object>,
  date: Date | null
}

export const INITIAL_STATE: IAppState = {
  todo: [],
  date: null
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case 'ADD_TODO':
      return state;

    case 'COMPLETE_TODO':
      return state;

    case 'REMOVE_TODO':
      return state;

    case 'CLEAR_TODO':
      return state;

    default:
      return state;
  }
}
