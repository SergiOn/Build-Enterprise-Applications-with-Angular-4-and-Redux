import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux'

import { IAppState, IAppAction } from '../store';
import { ADD_TODO, COMPLETE_TODO } from '../actions';
import { Store } from '../model/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  value: string;
  @select() todo: Store;
  @select() lastUpdate;

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
  }

  addTodo(e) {
    e.preventDefault();
    if (!e.target[0].validity.valid) {
      return;
    }

    // const isCompleted = Math.random() > 0.5;

    const store = new Store(
      {
        name: this.value,
        // isCompleted
      }
    );

    console.log(store);

    this.ngRedux.dispatch({
      type: ADD_TODO,
      ...store
    });

    this.value = '';
  }

  toggleTodo(t) {
    const store = new Store(t);
    // console.log(t);
    // console.log(store);

    this.ngRedux.dispatch({
      type: COMPLETE_TODO,
      ...store
    });
  }

  removeTodo(t) {
    console.log(t);

  }
}
