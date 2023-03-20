import { booksPerLoading } from "../../utils/constants";
import { GoogleBooks } from "./GoogleBooksTypes";

const API_KEY = "AIzaSyAVbG2ZaNggyn6kUSFu04jPbL-Ee0ASSGI";
const API_URL = "https://www.googleapis.com/books/v1/volumes?";

export enum CategoriesEnum {
  ALL = "all",
  ART = "art",
  BIOGRAPHY = "biography",
  COMPUTERS = "computers",
  HISTORY = "history",
  MEDICAL = "medical",
  POETRY = "poetry",
}

export enum SortingEnum {
  RELEVANCE = "relevance",
  NEWEST = "newest",
}

export interface SearchParams {
  searchString: string;
  category?: CategoriesEnum;
  sorting?: SortingEnum;
  startIndex: number;
}

function buildQueryParamsString({
  searchString,
  category,
  sorting,
  startIndex = 0,
}: SearchParams): string {
  let result = `q=${searchString}`;

  if (category && category !== "all") {
    result += `+subject:${category}`;
  }
  if (sorting) {
    result += `&orderBy=${sorting}`;
  }

  result += `&startIndex=${startIndex}&maxResults=${booksPerLoading}`;

  return result;
}

export const getBooks = async (params: SearchParams): Promise<GoogleBooks> => {
  return await fetch(
    `${API_URL}${buildQueryParamsString(params)}&key=${API_KEY}`
  ).then((res) =>
    res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
  );
};
