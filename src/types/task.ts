export interface ITaskData {
  text: string;
  completed: boolean;
}

export interface ITask extends ITaskData {
  toggleCompleted(): unknown;
  id: string;
  updateText: (text: string) => ITask;
}
