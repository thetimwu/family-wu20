import { collatedTasks } from "../constants";

export const collatedTasksExist = (selectedProject: string): any => {
  collatedTasks.find((task) => task.key === selectedProject);
};
