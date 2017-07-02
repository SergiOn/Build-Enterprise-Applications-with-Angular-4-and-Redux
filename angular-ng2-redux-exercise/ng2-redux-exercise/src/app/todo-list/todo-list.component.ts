import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux'

import { IAppState, IAppAction } from '../store';
import { ADD_TODO } from '../actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  value: string;
  @select() todo;
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

    this.ngRedux.dispatch({
      type: ADD_TODO,
      todo: {
        name: this.value,
        isCompleted: false,
        created: new Date()
      },
      lastUpdate: new Date()
    });

    this.value = '';
  }
}
