export interface IProject {
  name: string;
  projectId: string;
  userId: string;
}

export interface ITask {
  archived: boolean;
  date: string;
  projectId: string;
  task: string;
  userId: string;
}
