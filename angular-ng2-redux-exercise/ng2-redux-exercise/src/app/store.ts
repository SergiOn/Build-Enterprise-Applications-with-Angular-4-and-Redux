import { tassign } from 'tassign';
import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO, CLEAR_TODO } from './actions';

export interface TodoState {
  name: string,
  isCompleted: boolean,
  created: Date
}

export interface IAppState {
  todo: Array<TodoState>,
  lastUpdate: Date | null
}

export interface IAppAction {
  type: string,
  todo: TodoState,
  lastUpdate: Date | null
}

export const INITIAL_STATE: IAppState = {
  todo: [],
  lastUpdate: null
};

export function rootReducer(state: IAppState, action: IAppAction): IAppState {
  switch (action.type) {
    case ADD_TODO:
      console.log(action.lastUpdate);
      return tassign(state, {
        todo: [...state.todo, {...action.todo, id: state.todo.length + 1}],
        lastUpdate: action.lastUpdate
      });

    case COMPLETE_TODO: {
      if (!state.todo.includes(action.todo)) {
        return state;
      }

      const index = state.todo.indexOf(action.todo);
      // const todo = [...state.todo];
      // todo[index].isCompleted = !todo[index].isCompleted;

      const beforeItems = state.todo.slice(0, index);
      const afterItems = state.todo.slice(index + 1);
      const updateItem = tassign(state.todo[index], {isCompleted: !state.todo[index].isCompleted});
      const todo = [...beforeItems, updateItem, ...afterItems];

      return tassign(state, {
        todo,
        lastUpdate: action.lastUpdate
      });
    }

    case REMOVE_TODO: {
      if (!state.todo.includes(action.todo)) {
        return state;
      }
      const index = state.todo.indexOf(action.todo);
      const todo = [...state.todo];
      todo.splice(index, 1);

      return tassign(state, {
        todo,
        lastUpdate: action.lastUpdate
      });
    }

    case CLEAR_TODO:
      return tassign(state, {
        todo: [],
        lastUpdate: action.lastUpdate
      });

    default:
      return state;
  }
}

