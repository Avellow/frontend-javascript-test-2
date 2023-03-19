import { createAsyncThunk } from "@reduxjs/toolkit";

import { getBooks, SearchParams } from "../../api/google-books/googlebooks";
import { GoogleBooks } from "../../api/google-books/GoogleBooksTypes";

export const fetchBooks = createAsyncThunk<
  GoogleBooks,
  SearchParams,
  { rejectValue: string }
>("books/fetchBooks", async (params, { rejectWithValue }) => {
  const response = await getBooks(params);

  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }

  const data = await response.json();

  return data;
});
