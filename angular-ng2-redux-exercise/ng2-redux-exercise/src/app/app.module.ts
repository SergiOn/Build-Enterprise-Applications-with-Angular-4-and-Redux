import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from 'ng2-redux';

import { IAppState, rootReducer, INITIAL_STATE } from './store';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    protected ngRedux: NgRedux<IAppState>
  ) {
    this.ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
