import { ApplicationState } from "..";

export const booksStateSelector = (state: ApplicationState) => state.books;
export const lastIndexSelector = (state: ApplicationState) =>
  state.books.data.length ? state.books.data.length - 1 : 0;
export const booksDataSelector = (state: ApplicationState) => state.books.data;
export const totalSelector = (state: ApplicationState) => state.books.total;
export const loadingSelector = (state: ApplicationState) => state.books.loading;
export const errorSelector = (state: ApplicationState) => state.books.error;
