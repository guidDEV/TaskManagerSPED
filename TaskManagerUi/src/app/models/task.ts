export enum TaskStatus {
  Pending = 0,
  InProgress = 1,
  Completed = 2
}

export interface Task {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  status: TaskStatus;
}
