import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 as uuid } from "uuid";

const todoInit = [
  {
    id: uuid(),
    desc: "learn redux",
    isComplete: false,
  },
  {
    id: uuid(),
    desc: "learn typescrpt",
    isComplete: true,
  },
  {
    id: uuid(),
    desc: "learn redux",
    isComplete: false,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState: todoInit,
  reducers: {
    create: {
      reducer: (
        state,
        {
          payload,
        }: PayloadAction<{ id: string; desc: string; isComplete: boolean }>
      ) => {
        state.push(payload);
      },
      prepare: ({ desc }: { desc: string }) => {
        return {
          payload: {
            id: uuid(),
            desc,
            isComplete: false,
          },
        };
      },
    },
    edit: (state, { payload }: PayloadAction<{ id: string; desc: string }>) => {
      const todoToEdit = state.find((todo) => todo.id === payload.id);
      if (todoToEdit) {
        todoToEdit.desc = payload.desc;
      }
      return state;
    },
    toggle: (
      state,
      { payload }: PayloadAction<{ id: string; isComplete: boolean }>
    ) => {
      const todoToToggle = state.find((todo) => todo.id === payload.id);
      if (todoToToggle) {
        todoToToggle.isComplete = payload.isComplete;
      }
      return state;
    },
    remove: (state, { payload }: PayloadAction<{ id: string }>) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      return state.splice(index, 1);
    },
  },
});

export const selectTodoSlice = createSlice({
  name: "selectTodo",
  initialState: null as null | string,
  reducers: {
    select: (state, { payload }: PayloadAction<{ id: string }>) => {
      // below is not working for primitive, should return result directly instead.
      //   return (state = payload.id);
      return payload.id;
    },
  },
});

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0 as number,
  reducers: {},
  extraReducers: {
    [todoSlice.actions.create.type]: (state) => state + 1,
    [todoSlice.actions.edit.type]: (state) => state + 1,
    [selectTodoSlice.actions.select.type]: (state) => state + 1,
  },
});
