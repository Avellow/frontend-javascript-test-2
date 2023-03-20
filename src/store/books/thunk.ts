import { createAsyncThunk } from "@reduxjs/toolkit";

import { getBooks, SearchParams } from "../../api/google-books/googlebooks";
import { GoogleBooks } from "../../api/google-books/GoogleBooksTypes";

export const fetchBooks = createAsyncThunk<
  GoogleBooks,
  SearchParams,
  { rejectValue: string }
>("books/fetchBooks", async (params, { rejectWithValue }) => {
  try {
    const data = await getBooks(params);

    if (!data.items || !data.items.length) {
      return rejectWithValue(`По вашему запросу ничего не найдено`);
    }

    return data;
  } catch (e) {
    let message = "Ошибка при загрузке данных с сервера";
    if (e instanceof Error) {
      message = e.message;
    }
    return rejectWithValue(message);
  }
});
