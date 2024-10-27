import { ITask } from "../types/task";

//Це клас, що реалізує інтерфейс ITask
export class Task implements ITask {
  public id: string = String(Math.ceil(Math.random() * 9999));
  public text: string = "";
  public completed = false;

  constructor(text: string) {
    this.text = text;
  }

  updateText(text: string) {
    this.text = text;
    return this;
  }

  toggleCompleted() {
    this.completed = !this.completed;
    return this;
  }
}
