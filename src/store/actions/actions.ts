import { LOGIN_REQUEST } from "./types";
import { v1 as uuid } from "uuid";
import {
  ICreateTodoActionType,
  IEditTodoActionType,
  IToggleTodoActionType,
  IDeleteTodoActionType,
  ISelectTodoActionType,
  CREATE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  SELECT_TODO,
} from "./types";

//Actions creators
export const createTodoActionCreator = ({
  desc,
}: {
  desc: string;
}): ICreateTodoActionType => {
  return {
    type: CREATE_TODO,
    payload: {
      id: uuid(),
      desc,
      isComplete: false,
    },
  };
};

export const editTodoActionCreator = ({
  id,
  desc,
}: {
  id: string;
  desc: string;
}): IEditTodoActionType => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      desc,
    },
  };
};

export const toggleTodoActionCreator = ({
  id,
  isComplete,
}: {
  id: string;
  isComplete: boolean;
}): IToggleTodoActionType => {
  return {
    type: TOGGLE_TODO,
    payload: { id, isComplete },
  };
};

export const deleteTodoActionCreator = ({
  id,
}: {
  id: string;
}): IDeleteTodoActionType => {
  return {
    type: DELETE_TODO,
    payload: { id },
  };
};

export const selectTodoActionCreator = ({
  id,
}: {
  id: string;
}): ISelectTodoActionType => {
  return {
    type: SELECT_TODO,
    payload: { id },
  };
};
