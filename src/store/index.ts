import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { booksReducer } from "./books";

export const appReducer = combineReducers({
  books: booksReducer,
});

const store = configureStore({
  reducer: appReducer,
  devTools: true,
});

export default store;

export type ApplicationState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;
