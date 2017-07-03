export class Store {
  constructor(
    public todo: {
      id?: number,
      name: string,
      isCompleted?: boolean,
      created?: Date
    },
    public lastUpdate?: Date
  ) {

    if (!this.todo.hasOwnProperty('id')) {
      this.todo.id = Date.now();
    }

    if (!this.todo.hasOwnProperty('isCompleted')) {
      this.todo.isCompleted = false;
    }

    if (!this.todo.hasOwnProperty('created')) {
      this.todo.created = new Date();
    }

    this.lastUpdate = new Date();
  }
}
