
export interface ITask {
  id: string;
  text: string;
  completed: boolean;
  updateText: (text: string) => ITask;
}
