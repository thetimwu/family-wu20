import React, { ReactElement, useState, useEffect } from "react";
import firebase from "../firebase";
import moment from "moment";
import { collatedTasksExist } from "../helpers";

interface Props {
  tasks: string[];
  archivedTasks: any[];
}

export function useTasks(selectedProject: string): Props {
  const [tasks, setTasks] = useState<string[]>([]);
  const [archivedTasks, setArchivedTasks] = useState<any[]>([]);
  useEffect(() => {
    let unsubscribe: any = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "1");

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === ""
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot(
      (snapshot: firebase.firestore.DocumentData) => {
        const newTasks = snapshot.docs.map(
          (task: firebase.firestore.DocumentData) => ({
            id: task.id,
            ...task.data(),
          })
        );

        setTasks(
          selectedProject === "NEXT_7"
            ? newTasks.filter(
                (task: firebase.firestore.DocumentData) =>
                  moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                  task.archived !== true
              )
            : newTasks.filter(
                (task: firebase.firestore.DocumentData) =>
                  task.archived !== true
              )
        );
        setArchivedTasks(
          newTasks.filter(
            (task: firebase.firestore.DocumentData) => task.archived !== false
          )
        );
      }
    );

    return () => unsubscribe();
  }, [selectedProject]);

  return { tasks, archivedTasks };
}