import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import { CLEAR_TODO, UPDATE_LAST_DATE } from '../actions';

interface AppState {
  update: Date
}

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {
  lastUpdate: Observable<Date>;

  constructor(
    private store: Store<AppState>
  ) {
    this.lastUpdate = store.select('update');
  }

  ngOnInit() {
  }



}
