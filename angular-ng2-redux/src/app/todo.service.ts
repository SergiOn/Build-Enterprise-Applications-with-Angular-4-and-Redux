import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';

@Injectable()
export class TodoService {
  private readonly url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private http: Http,
    private ngRedux: NgRedux<IAppState>
  ) {}

  loadTodos() {
    this.ngRedux.dispatch({ type: 'FETCH_TODO_REQUEST' });
    // store.isFetching = true;

    return this.http.get(this.url).subscribe(todos => {
      this.ngRedux.dispatch({ type: 'FETCH_TODO_SUCCESS', todos: todos });
    }, err => {
      this.ngRedux.dispatch({ type: 'FETCH_TODO_ERROR', error: err });
    });
  }

}
