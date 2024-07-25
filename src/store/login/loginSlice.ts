import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Roles } from "../../models/login/login";

export interface ILogin {
  loggedin: boolean;
  username: string;
  role: Roles;
}

const initialState: ILogin = {
  loggedin: false,
  username: "",
  role: null,
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<ILogin>) => {
      state.loggedin = action.payload.loggedin;
      state.username = action.payload.username;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.loggedin = !state.loggedin;
      state.username = "";
      state.role = null;
    },
  },
});

export const { login, logout } = loginSlice.actions;
