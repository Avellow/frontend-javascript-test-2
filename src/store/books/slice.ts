import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../../api/google-books/GoogleBooksTypes";
import { fetchBooks } from "./thunk";

const NAME = "books";

type BooksStateType = {
  data: Item[];
  total: number;
  loading: boolean;
  error: string | null;
};

const initialState: BooksStateType = {
  data: [],
  total: 0,
  loading: false,
  error: null,
};

const booksSlice = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.data = action.payload.items;
        state.total = action.payload.totalItems;
        state.loading = false;
      });
  },
});

export const { reducer: booksReducer, actions: booksAction } = booksSlice;
