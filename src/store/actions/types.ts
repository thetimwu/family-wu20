import { ITodo } from "../../components/todos/type";

// constants
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const CREATE_TODO = "CREATE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SELECT_TODO = "SELECT_TODO";

//  Action Type
export interface ICreateTodoActionType {
  type: typeof CREATE_TODO;
  payload: ITodo;
}

export interface IEditTodoActionType {
  type: typeof EDIT_TODO;
  payload: { id: string; desc: string };
}

export interface IToggleTodoActionType {
  type: typeof TOGGLE_TODO;
  payload: { id: string; isComplete: boolean };
}

export interface IDeleteTodoActionType {
  type: typeof DELETE_TODO;
  payload: { id: string };
}

export interface ISelectTodoActionType {
  type: typeof SELECT_TODO;
  payload: { id: string };
}

export type TodoActionTypes =
  | ICreateTodoActionType
  | IEditTodoActionType
  | IToggleTodoActionType
  | IDeleteTodoActionType;

export type SelectedTodoActionTypes = ISelectTodoActionType;
