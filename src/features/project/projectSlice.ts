import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProject } from "../../components/projects/type";
import { useProjects } from "../../hooks";
import { IProjectWithDocID } from "../../hooks";

interface IInitProject {
  projects: IProject[] | [];
  isLoading: boolean;
  error: null | string;
}

const initProject: IInitProject = {
  projects: [],
  isLoading: false,
  error: "",
};

export const projectSlice = createSlice({
  name: "projects",
  initialState: initProject,
  reducers: {
    startFetching: (state) => {
      state.isLoading = true;
    },
    hasError: (state, { payload }: PayloadAction<{ error: string }>) => {
      state.error = payload.error;
      state.isLoading = false;
    },
    fetchSuccess: (
      state,
      { payload }: PayloadAction<{ projects: IProjectWithDocID[] }>
    ) => {
      state.projects = payload.projects;
      state.isLoading = false;
    },
  },
});

export const { startFetching, hasError, fetchSuccess } = projectSlice.actions;
