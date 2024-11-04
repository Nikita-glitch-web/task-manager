import { ITask } from "../types/task";

// Це клас, що реалізує інтерфейс ITask
export class Task implements ITask {
  public id: string;
  public text: string;
  public completed: boolean;

  constructor(
    text: string,
    completed: boolean = false,
    id: string = String(Math.ceil(Math.random() * 9999))
  ) {
    this.text = text;
    this.completed = completed;
    this.id = id;
  }

  updateText(text: string) {
    this.text = text;
    return this;
  }

  toggleCompleted() {
    this.completed = !this.completed;
    return this;
  }

  static fromObject(obj: {
    id: string;
    text: string;
    completed: boolean;
  }): Task {
    return new Task(obj.text, obj.completed, obj.id);
  }
}
