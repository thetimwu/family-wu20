import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoginDetail } from "./types";
import { ThunkAction } from "redux-thunk";
import firebase from "firebase";

const _loginWithEmailAndPassword = createAsyncThunk(
  "auth/loginWithEmailAndPassword",
  async (credentials: ILoginDetail) => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);
      return { token: await response.user?.getIdToken(true) };
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  }
);

// const _login = (credentials: ILoginDetail):ThunkAction<void, => async (dispatch) => {
//   dispatch(startLogin());
//   try {
//     const response = await firebase
//       .auth()
//       .signInWithEmailAndPassword(credentials.email, credentials.password);
//     dispatch(loginSuccess({ token: response.user?.getIdToken }));
//   } catch (error) {
//     dispatch(loginError({ error: error.message }));
//   }
// };

const authInitialState: {
  isLoading: boolean;
  token: null | string | undefined;
  error: null | string;
} = {
  isLoading: false,
  token: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    startSignup: (state) => {
      state.isLoading = true;
    },
    signupSuccess: (state, { payload }: PayloadAction<{ token: string }>) => {
      state.token = payload.token;
      state.isLoading = false;
    },
    signupError: (state, { payload }: PayloadAction<{ error: string }>) => {
      state.error = payload.error;
      state.isLoading = false;
    },
    startLogin: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }: PayloadAction<{ token: string }>) => {
      state.token = payload.token;
      state.isLoading = false;
    },
    loginError: (state, { payload }: PayloadAction<{ error: string }>) => {
      state.error = payload.error;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      _loginWithEmailAndPassword.fulfilled,
      (state, { payload }) => {
        state.token = payload.token;
      }
    );
  },
});

export const {
  startLogin,
  loginSuccess,
  loginError,
  startSignup,
  signupSuccess,
  signupError,
} = authSlice.actions;
