import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux'
import { Map } from 'immutable'

import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select(s => s.get('counter')) count;

  constructor(
    private ngRedux: NgRedux<Map<string, any>>
  ) {
    ngRedux.subscribe(() => {
      const store = ngRedux.getState();
      console.log(store);
    });
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

}
