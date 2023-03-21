import { IAppBook } from "../api/AppBook";
import { Item } from "../api/google-books/GoogleBooksTypes";

export function convertBookProps(book: Item): IAppBook {
  let image =
    "https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMGNvdmVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60";
  if (book.volumeInfo.imageLinks) {
    image = book.volumeInfo.imageLinks.smallThumbnail;
    if (typeof image === "undefined") {
      image = book.volumeInfo.imageLinks.thumbnail;
    }
  }

  return {
    etag: book.etag,
    authors: book.volumeInfo.authors ? book.volumeInfo.authors : [],
    title: book.volumeInfo.title,
    subtitle: book.volumeInfo.subtitle,
    category: book.volumeInfo.categories ? book.volumeInfo.categories : [],
    image,
    description: book.volumeInfo.description,
    volumeId: book.id,
  };
}
