export interface ITask {
  toggleCompleted(): unknown;
  id: string;
  text: string;
  completed: boolean;
  updateText: (text: string) => ITask;
}
