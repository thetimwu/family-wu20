import { collatedTasks } from "../constants";

interface ITask {
  key: string;
  name: string;
}

export const collatedTasksExist = (
  selectedProject: string
): ITask | undefined => {
  return collatedTasks.find((task: ITask) => task.key === selectedProject);
};
