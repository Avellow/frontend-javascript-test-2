import { SearchParams } from "../api/google-books/googlebooks";

export function isSearchParamsEqual(
  first: SearchParams,
  second: SearchParams
): boolean {
  if (
    first.category !== second.category ||
    first.searchString !== second.searchString ||
    first.sorting !== second.sorting
  ) {
    return false;
  }

  return true;
}
