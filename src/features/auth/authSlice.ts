import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoginDetail } from "./types";
import firebase from "firebase";

export const loginWithEmailAndPassword = createAsyncThunk(
  "auth/loginWithEmailAndPassword",
  async (credentials: ILoginDetail, { rejectWithValue }) => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
      return { token: await response.user?.getIdToken(true) };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const createUserWithEmailAndPassword = createAsyncThunk(
  "auth/createUserWithEmailAndPassword",
  async (credentials: ILoginDetail, { rejectWithValue }) => {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(
          credentials.email,
          credentials.password
        );
      return { token: await response.user?.getIdToken(true) };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const authInitialState: {
  isLoading: boolean;
  token: null | string | undefined;
  error: any;
} = {
  isLoading: false,
  token: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    // startSignup: (state) => {
    //   state.isLoading = true;
    // },
    // signupSuccess: (state, { payload }: PayloadAction<{ token: string }>) => {
    //   state.token = payload.token;
    //   state.isLoading = false;
    // },
    // signupError: (state, { payload }: PayloadAction<{ error: any }>) => {
    //   state.error = payload.error;
    //   state.isLoading = false;
    // },
    // startLogin: (state) => {
    //   state.isLoading = true;
    // },
    // loginError: (state, { payload }: PayloadAction<{ error: any }>) => {
    //   state.error = payload.error;
    //   state.isLoading = false;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(loginWithEmailAndPassword.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(
      loginWithEmailAndPassword.fulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.isLoading = false;
      }
    );
    builder.addCase(
      loginWithEmailAndPassword.rejected,
      (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }
    );
    builder.addCase(createUserWithEmailAndPassword.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(
      createUserWithEmailAndPassword.fulfilled,
      (state, { payload }) => {
        state.token = payload.token;
      }
    );
    builder.addCase(
      createUserWithEmailAndPassword.rejected,
      (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }
    );
    builder.addDefaultCase((state) => state);
  },
});

export default authSlice.reducer;
