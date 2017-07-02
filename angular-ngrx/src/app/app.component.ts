import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';

import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './actions';

interface AppState {
  todo: {};
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: Observable<object>;

  constructor(private store: Store<AppState>){
    this.todo = store.select('todo');
  }

  addTodo(){
    this.store.dispatch({ type: ADD_TODO });
  }

  updateTodo(){
    this.store.dispatch({ type: UPDATE_TODO });
  }

  removeTodo(){
    this.store.dispatch({ type: REMOVE_TODO });
  }
}
