import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import { CLEAR_TODO, UPDATE_LAST_DATE } from '../actions';
import { ITodoState } from '../reducers';

interface AppState {
  todo: ITodoState[],
  update: Date
}

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {
  lastUpdate: Observable<Date>;
  todos: Observable<number>;
  complete: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) {
    this.lastUpdate = store.select('update');
    this.todos = store.select(t => t.todo.length);
    this.complete = store.select(t => t.todo.filter(item => item.isCompleted).length / t.todo.length || 0);
  }

  ngOnInit() {
  }

  clearTodo() {
    this.store.dispatch({ type: CLEAR_TODO });
    this.store.dispatch({ type: UPDATE_LAST_DATE });
  }

}
