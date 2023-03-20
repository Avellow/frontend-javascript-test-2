import {
  AnyAction,
  CaseReducer,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { IAppBook } from "../../api/AppBook";
import { SearchParams } from "../../api/google-books/googlebooks";
import { convertBookProps } from "../../utils/bookPropsConverter";
import { isSearchParamsEqual } from "../../utils/isSearchParamsEqual";
import { fetchBooks } from "./thunk";

const NAME = "books";

type BooksStateType = {
  data: IAppBook[];
  total: number;
  loading: boolean;
  error: string | null;
  lastRequestParams: SearchParams | null;
};

const initialState: BooksStateType = {
  data: [],
  total: 0,
  loading: false,
  error: null,
  lastRequestParams: null,
};

const saveRequestParams: CaseReducer<
  BooksStateType,
  PayloadAction<SearchParams>
> = (state, { payload: params }) => {
  state.lastRequestParams = params;
};

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

const booksSlice = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    saveRequestParams,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const convertedBooks = action.payload.items.map(convertBookProps);
        const currentRequestParams = action.meta.arg;

        /* 
          код ниже определяет чем является запрос
          - загрузкой новых книг или пагинацией
        */
        if (
          state.lastRequestParams &&
          isSearchParamsEqual(state.lastRequestParams, currentRequestParams)
        ) {
          state.data.push(...convertedBooks);
          state.lastRequestParams = currentRequestParams;
        } else {
          state.data = convertedBooks;
          state.lastRequestParams = { ...currentRequestParams, startIndex: 0 };
        }

        state.total = action.payload.totalItems;
        state.loading = false;
      })
      .addMatcher(isError, (state, action) => {
        const currentRequestParams = action.meta.arg;

        /* 
          если при пагинации не приходят элементы книг,
          выставляет фактический total по длине массива, чтобы скрыть кнопку,
          иначе - ошибка что книги не найдены
        */
        if (
          state.lastRequestParams &&
          isSearchParamsEqual(state.lastRequestParams, currentRequestParams)
        ) {
          state.total = state.data.length;
        } else {
          state.error = action.payload;
          state.data = [];
          state.total = 0;
        }
        state.loading = false;
      });
  },
});

export const { reducer: booksReducer, actions: booksAction } = booksSlice;
