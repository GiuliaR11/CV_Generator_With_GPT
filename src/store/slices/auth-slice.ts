import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CreateUserDto } from "../../models/User";

interface State {
  isLoggedIn: boolean;
  user: CreateUserDto | null;
  isAuthLoading: boolean;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    isAuthLoading: true,
  } as State,
  reducers: {
    setIsAuthLoading(state, action: PayloadAction<boolean>){
      state.isAuthLoading = action.payload;
      return state;
    },
    setLogIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
      return state;
    },
    setUser(state, action: PayloadAction<CreateUserDto | null>) {
      state.isLoggedIn = action.payload !== null;
      state.user = action.payload
      return state;
    },
  },
});

export const {setUser, setLogIn, setIsAuthLoading} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export const userProfile = (state: RootState) => state.auth.user; 

export const authReducer = authSlice.reducer;
