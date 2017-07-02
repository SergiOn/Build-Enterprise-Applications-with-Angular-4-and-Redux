export class Store {
  constructor(
    public todo: {
      name: string,
      isCompleted?: boolean,
      created?: Date
    },
    public lastUpdate?: Date
  ) {

    if (!this.todo.hasOwnProperty('isCompleted')) {
      this.todo.isCompleted = false;
    }

    this.todo.created = new Date();
    this.lastUpdate = new Date();
  }
}
