import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import { ADD_TODO, UPDATE } from '../actions';
import { ITodoState } from '../reducers';

interface AppState {
  todo: ITodoState[],
  update: Date
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  value: string;
  todo: Observable<ITodoState[]>;
  lastUpdate: Observable<Date>;

  constructor(
    private store: Store<AppState>
  ) {
    this.todo = store.select('todo');
    this.lastUpdate = store.select('update');
  }

  ngOnInit() {
  }

  addTodo(e) {
    e.propertyIsEnumerable();
    if (!this.value) {
      return;
    }

    console.log('addTodo');

    this.store.dispatch({
      type: ADD_TODO,
      payload: {
        title: this.value,
        isCompleted: false,
        created: new Date()
      }
    });

    this.store.dispatch({ type: UPDATE });

    this.value = '';
  }

  toggleTodo(t) {
    console.log('toggleTodo');
  }

  removeTodo(t) {
    console.log('removeTodo');
  }
}
