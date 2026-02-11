export type TaskStatus = 'Pending' | 'InProgress' | 'Completed';

export interface TaskItem {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  status: TaskStatus;
}
