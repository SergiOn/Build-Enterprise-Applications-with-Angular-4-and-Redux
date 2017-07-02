import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux'

import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter = 0;

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) {
    ngRedux.subscribe(() => {
      const store = ngRedux.getState();
      console.log(store);

      this.counter = store.counter;
    });
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

}
