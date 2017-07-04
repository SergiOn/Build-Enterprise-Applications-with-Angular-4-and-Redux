import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TodoService {
  private readonly url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private http: Http
  ) {}

  getTodos() {
    return this.http.get(this.url);
  }

}
