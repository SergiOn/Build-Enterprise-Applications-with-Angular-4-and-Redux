import { INCREMENT } from './actions';

export interface IAppState {
  counter: number,
  messaging?: {
    newMessages: number
  }
}

export const INITIAL_STATE: IAppState = {
  counter: 0,
  messaging: {
    newMessages: 5
  }
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case INCREMENT: return { ...state, counter: state.counter + 1 };
    // case INCREMENT: return { counter: state.counter + 1 }; // select with function save value newMessages
  }

  return state;
}
