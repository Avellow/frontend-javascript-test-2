import { ApplicationState } from "..";

export const booksStateSelector = (state: ApplicationState) => state.books;
export const lastIndexSelector = (state: ApplicationState) =>
  state.books.data.length ? state.books.data.length - 1 : 0;
export const lastSearchedParamsSelector = (state: ApplicationState) =>
  booksStateSelector(state).lastRequestParams;
