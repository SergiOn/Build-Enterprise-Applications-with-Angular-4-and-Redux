import { tassign } from 'tassign';
import { Map } from 'immutable'
import { INCREMENT } from './actions';

export interface IAppState {
  counter: number
}

export const INITIAL_STATE: IAppState = {
  counter: 0,
};

export function rootReducer(state: Map<string, any>, action): Map<string, any> {
  switch (action.type) {
    case INCREMENT:
      // return { counter: state.counter + 1 };
      // return { ...state, counter: state.counter + 1 };
      // return Object.assign({}, state, { counter: state.counter + 1, isOnline: true });
      // return tassign(state, { counter: state.counter + 1 });
      // state.set('isOnline', true);
      return state.set('counter', state.get('counter') + 1);
  }

  return state;
}
