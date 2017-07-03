import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux'

import { IAppState } from '../store';
import { CLEAR_TODO } from '../actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {
  @select(t => t.todo.length) todos;
  @select(t => t.todo.filter(i => i.isCompleted).length / t.todo.length || 0) complete;
  @select() lastUpdate;

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
  }

  clearTodo() {
    this.ngRedux.dispatch({ type: CLEAR_TODO, lastUpdate: new Date() });
  }
}
